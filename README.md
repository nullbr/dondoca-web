<div align='center'><img height="200px" src='https://user-images.githubusercontent.com/94543524/231549988-a4a4c82d-be72-4a8d-95a7-f7abdd7f6aa0.png'/></div>

<h2>About the project</h2>

  <p>Dondoca is a beauty salon, located in São Roque, SP, Brazil and <b>Dondoca Web</b> is a platform for the managment, scheduling and to display services ts customers.</p>
  <p>This interface communicate with the Dondoca API, which is built with Ruby on Rails</p>

👉 Live: <a href='https://dondocasr.com.br'>Dondoca Web (dondocasr.com.br)</a>
👉 Backend: <a href='https://api.dondocasr.com.br'>Dondoca API (api.dondocasr.com.br)</a>

<h3>Built with:</h3>

» React JS <br>
» Tailwind CSS <br>

<h2>Preview 📸</h2>
<br>
<h3 align='center'>Home Page 🏡</h3>

<div align='center'>
  <img width="1497" alt="Screenshot 2023-04-12 at 15 32 04" src="https://user-images.githubusercontent.com/94543524/231552129-044491a5-7e42-4944-bc52-ab0d59863fb4.png">
</div>

### Deploy Production

```Bash
username=
host=
npm run build
mv dist html
scp -r html ${username}@${host}:~/dondocasr.com.br/
ssh ${username}@${host}
sudo rm -rf /var/www/dondocasr.com.br
sudo mv ~/dondocasr.com.br /var/www/
mkdir ~/dondocasr.com.br
exit
mv html dist
```
