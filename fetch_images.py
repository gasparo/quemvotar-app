import urllib.request
import json

pages = {
    'Jair_Bolsonaro': 'bolsonaro.jpg',
    'Luiz_Inácio_Lula_da_Silva': 'lula.jpg',
    'Partido_Liberal_(Brasil)': 'pl_logo.png',
    'Partido_dos_Trabalhadores': 'pt_logo.png'
}

for title, filename in pages.items():
    url = f'https://pt.wikipedia.org/w/api.php?action=query&titles={title}&prop=pageimages&format=json&pithumbsize=500'
    try:
        req = urllib.request.urlopen(url)
        data = json.loads(req.read())
        pages = data['query']['pages']
        for page_id in pages:
            img_url = pages[page_id]['thumbnail']['source']
            urllib.request.urlretrieve(img_url, filename)
            print(f'Downloaded {filename}')
    except Exception as e:
        print(f'Failed {filename}: {e}')
