from bs4 import BeautifulSoup
import base64

html = open('mensa.html').read()

soup = BeautifulSoup(html,'html.parser')
 

pretty = soup.prettify()


a = soup.find_all('a')


for i,aa in enumerate(a):
 href = aa['href']
 if href.startswith('data:image/png;base64, '):
  data = href[23:]
  imgdata = base64.b64decode(data)
  with open('img'+str(i)+'.png','wb') as f:
   f.write(imgdata)
  