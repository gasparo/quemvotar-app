import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import fitz
except ImportError:
    print("PyMuPDF not found, installing...")
    install("PyMuPDF")
    import fitz

def extract_pdf(pdf_path, output_path):
    print(f"Extraindo {pdf_path}...")
    try:
        doc = fitz.open(pdf_path)
        with open(output_path, 'w', encoding='utf-8') as f:
            for i, page in enumerate(doc):
                f.write(f"\n\n================================\n")
                f.write(f"          PÁGINA {i+1}          \n")
                f.write(f"================================\n\n")
                
                # 'text' extracts plain text but tries to preserve visual order
                text = page.get_text("text")
                f.write(text)
        print(f"Concluido: {output_path}")
    except Exception as e:
        print(f"Erro ao extrair {pdf_path}: {e}")

if __name__ == "__main__":
    extract_pdf("proposta-pl.pdf", "proposta_pl_melhorada.txt")
    extract_pdf("proposta-pt.pdf", "proposta_pt_melhorada.txt")
