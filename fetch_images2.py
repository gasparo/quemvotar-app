import urllib.request
import urllib.parse
import json

pages = {
    'Jair Bolsonaro': 'bolsonaro.jpg',
    'Luiz Inácio Lula da Silva': 'lula.jpg',
    'Partido Liberal (Brasil)': 'pl_logo.png',
    'Partido dos Trabalhadores': 'pt_logo.png'
}

req_headers = {'User-Agent': 'Mozilla/5.0'}

for title, filename in pages.items():
    # Properly encode the title for URL
    safe_title = urllib.parse.quote(title)
    url = f'https://pt.wikipedia.org/w/api.php?action=query&titles={safe_title}&prop=pageimages&format=json&pithumbsize=500'
    try:
        req = urllib.request.Request(url, headers=req_headers)
        response = urllib.request.urlopen(req)
        data = json.loads(response.read())
        
        pages_data = data['query']['pages']
        for page_id in pages_data:
            img_url = pages_data[page_id]['thumbnail']['source']
            img_req = urllib.request.Request(img_url, headers=req_headers)
            img_data = urllib.request.urlopen(img_req).read()
            with open(filename, 'wb') as f:
                f.write(img_data)
            print(f'Downloaded {filename}')
    except Exception as e:
        print(f'Failed {filename}: {e}')
