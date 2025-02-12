
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Портфолио учеников BTCS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>🎓 Портфолио учеников BTCS</h1>
    <input type="text" id="search" placeholder="🔍 Найдите ученика...">
    <ul id="students"></ul>
  </div>

  <!-- Модальное окно портфолио -->
  <div id="portfolio-modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closePortfolio()">&times;</span>
      <div id="portfolio-content"></div>
      <div class="modal-buttons">
        <button class="edit-button" onclick="openEditDataForm()">✏️ Изменить данные</button>
        <button onclick="openAchievementForm()">➕ Добавить достижение</button>
        <button onclick="downloadAchievements()">📥 Скачать достижения</button>
      </div>
    </div>
  </div>

  <!-- Модальное окно добавления достижения -->
  <div id="achievement-modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeAchievementForm()">&times;</span>
      <h2>🏆 Добавить достижение</h2>
      <select id="achievement-type">
        <option value="Рекомендательное письмо">📜 Рекомендательное письмо</option>
        <option value="Сертификат">🎓 Сертификат</option>
        <option value="Участие в мероприятии">🏅 Участие в мероприятии</option>
        <option value="Волонтерство">🤝 Волонтерство</option>
        <option value="Награда">🥇 Награда за олимпиаду</option>
      </select>
      <textarea id="achievement-description" placeholder="Введите описание..."></textarea>
      <input type="file" id="achievement-file">
      <button onclick="saveAchievement()">💾 Сохранить</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
