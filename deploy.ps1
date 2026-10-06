<#
.SYNOPSIS
Script de deploy automático para S3 e CloudFront.

.DESCRIPTION
Sincroniza os arquivos locais da aplicação web (HTML, CSS, JS e imagens) com um bucket do Amazon S3
e invalida o cache do CloudFront para que a nova versão seja distribuída globalmente.

.EXAMPLE
.\deploy.ps1 -BucketName "quemvotar-app-prd" -DistributionId "E1ABCD2EFG3HIJ"
#>

param (
    [Parameter(Mandatory=$false)]
    [string]$BucketName = "testecego-app-2026",

    [Parameter(Mandatory=$false)]
    [string]$DistributionId = "E33JMEGPVA08QK"
)

Write-Host "Iniciando processo de deploy..." -ForegroundColor Cyan

# 1. Verificar AWS CLI
if (!(Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-Host "AWS CLI não encontrado! Por favor, instale e configure o AWS CLI primeiro." -ForegroundColor Red
    exit 1
}

# 2. Sincronizar arquivos para o S3
# Fazemos o exclude de scripts python e pdfs que usamos apenas localmente
Write-Host "Sincronizando arquivos com o S3 (Bucket: $BucketName)..." -ForegroundColor Yellow
aws s3 sync . "s3://$BucketName" `
    --exclude "*" `
    --include "index.html" `
    --include "styles.css" `
    --include "script.js" `
    --include "data.js" `
    --include "*.jpg" `
    --include "*.png" `
    --include "*.svg" `
    --delete

if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro durante o upload para o S3!" -ForegroundColor Red
    exit $LASTEXITCODE
}
Write-Host "Upload concluído com sucesso!" -ForegroundColor Green

# 3. Invalidar Cache do CloudFront
if ($DistributionId -ne "INSERIR_DISTRIBUTION_ID_AQUI") {
    Write-Host "Invalidando o cache do CloudFront (Distribution: $DistributionId)..." -ForegroundColor Yellow
    $invalidation = aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*" --output json | ConvertFrom-Json
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Erro ao invalidar cache do CloudFront!" -ForegroundColor Red
    } else {
        $invId = $invalidation.Invalidation.Id
        Write-Host "Invalidação criada com sucesso. ID: $invId" -ForegroundColor Green
        Write-Host "As bordas do CloudFront estão sendo atualizadas..." -ForegroundColor Cyan
    }
} else {
    Write-Host "DistributionId não fornecido. O cache do CloudFront precisará ser invalidado manualmente ou o script deve ser atualizado com o ID." -ForegroundColor DarkGray
}

Write-Host "🚀 Deploy Finalizado!" -ForegroundColor Green
