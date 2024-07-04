function draw() {
    const canvas = document.getElementById("canvas");  // 取得畫布
    if (canvas.getContext) {                           // 確認網站有支援canvas（最好做這一步）
      const ctx = canvas.getContext("2d");
      ctx.fillRect(50
        , 50, 50, 40);             // 規格為2D平面，這行設定的變數名稱將用來呼叫畫布。（設定一次就好）
    }
    
  }
  draw();
  const ctx = canvas.getContext("2d");  // 變數名稱ctx可更改


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(75, 30);
ctx.lineTo(100, 50
);
ctx.fill();