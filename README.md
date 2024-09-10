# comic-ui
UI connects to backend generated AI images and display using using NextJS, Node, React. For design it uses Tailwind with Daisyui components.

## Kids Comic UI 
<img width="842" alt="Ollie-Olive-sample" src="https://github.com/user-attachments/assets/306b9e4b-b3dc-4fb1-b015-bb80046783db">


## Build tailwind css
```
npx tailwindcss -i global.css -o ./styles/global.css
```

## Start project
```
npm run dev
```

## Optional: Deploy project to Azure "Static Web App"
```
az login
```

```
swa login
```

```
swa deploy --env production -a ./mydevfolder
```
