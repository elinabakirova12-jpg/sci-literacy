// Ждем полной загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("content-area");
    const btnTheory = document.getElementById("btn-theory");
    const btnDetective = document.getElementById("btn-detective");
    const btnPubchem = document.getElementById("btn-pubchem");

    // Блок 1. Содержимое вкладки "Теория"
    const theoryHTML = `
        <div class="fade-in space-y-4">
            <p style="font-size: 0.85rem; color: #6b7280; font-style: italic; text-align: center; margin-bottom: 0.5rem;">
                💡 Нажмите на любой заголовок ниже, чтобы открыть подробное описание и примеры.
            </p>

            <!-- 1. Импакт-фактор -->
            <div class="info-card" style="padding: 0; overflow: hidden;">
                <div class="clickable-header" onclick="toggleDetails('details-if')" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; border: none; padding: 0;">📊 Импакт-фактор (IF)</h2>
                    <span style="color: #4f46e5; font-weight: bold; font-size: 0.85rem;">Развернуть ➔</span>
                </div>
                <div id="details-if" class="details-content" style="padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px dashed #e5e7eb;">
                    <p class="card-subtitle text-indigo" style="margin-top: 0.5rem;">Вес и авторитет научного журнала</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                        Это главный международный показатель значимости журнала. Он рассчитывается как среднее число цитирований, которое получает одна статья в этом издании. Это аналог «среднего количества лайков» в научном мире.
                    </p>
                    <div class="formula-block">
                        Импакт-фактор = Всего ссылок за 2 года ÷ Число статей за эти же 2 года
                    </div>
                    <div class="guidelines-list">
                        <p style="font-weight: bold; color: #4b5563; margin-bottom: 0.25rem;">ОРИЕНТИРЫ ДЛЯ ХИМИКА:</p>
                        <p>• <strong>IF > 4.0</strong> — отличный международный уровень. Статьи активно читаются учеными по всему миру.</p>
                        <p>• <strong>IF > 14.0</strong> — мировая научная элита (например, легендарный журнал <em>JACS</em>).</p>
                    </div>
                </div>
            </div>

            <!-- 2. Квартили -->
            <div class="info-card" style="padding: 0; overflow: hidden;">
                <div class="clickable-header" onclick="toggleDetails('details-q')" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; border: none; padding: 0;">🎯 Квартили журналов (Q1–Q4)</h2>
                    <span style="color: #059669; font-weight: bold; font-size: 0.85rem;">Развернуть ➔</span>
                </div>
                <div id="details-q" class="details-content" style="padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px dashed #e5e7eb;">
                    <p class="card-subtitle text-emerald" style="margin-top: 0.5rem;">Универсальное сито мировой науки</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.75rem;">
                        Все международные журналы в своей области сортируются по убыванию импакт-фактора и делятся на 4 равные группы (четверти).
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; text-align: center; font-size: 0.75rem; font-weight: bold; color: white; margin-bottom: 0.75rem;">
                        <div style="background-color: #059669; padding: 0.5rem; border-radius: 0.375rem;">🟩 Q1 (Высший)</div>
                        <div style="background-color: #d97706; padding: 0.5rem; border-radius: 0.375rem;">🟨 Q2 (Высокий)</div>
                        <div style="background-color: #ea580c; padding: 0.5rem; border-radius: 0.375rem;">🟧 Q3 (Средний)</div>
                        <div style="background-color: #dc2626; padding: 0.5rem; border-radius: 0.375rem;">🟥 Q4 (Начальный)</div>
                    </div>
                    <div class="guidelines-list">
                        <p style="font-weight: bold; color: #4b5563; margin-bottom: 0.35rem;">🔬 ХИМИЧЕСКИЕ ЖУРНАЛЫ-ПРИМЕРЫ ДЛЯ ПРАКТИКУМА:</p>
                        <p style="margin-bottom: 0.35rem;">• <span style="color:#059669; font-weight:bold;">🟩 уровень Q1:</span> <a href="https://acs.org" target="_blank" style="color: #4f46e5; font-weight: bold; text-decoration: underline;">JACS</a> — абсолютная мировая элита.</p>
                        <p style="margin-bottom: 0.35rem;">• <span style="color:#d97706; font-weight:bold;">🟨 уровень Q2:</span> <a href="https://mendcomm.org" target="_blank" style="color: #4f46e5; font-weight: bold; text-decoration: underline;">Mendeleev Communications</a> — ведущий российский журнал на английском.</p>
                        <p style="margin-bottom: 0.35rem;">• <span style="color:#ea580c; font-weight:bold;">🟧 уровень Q3:</span> <a href="https://springer.com" target="_blank" style="color: #4f46e5; font-weight: bold; text-decoration: underline;">Russian Journal of Physical Chemistry B</a> — официальный научный архив.</p>
                        <p style="margin-bottom: 0.35rem;">• <span style="color:#dc2626; font-weight:bold;">🟥 уровень Q4:</span> <a href="https://sciencejournals.ru" target="_blank" style="color: #4f46e5; font-weight: bold; text-decoration: underline;">Журнал органической химии</a> — верифицированный сайт РАН.</p>
                    </div>
                </div>
            </div>

            <!-- 3. ВАК и Белый список -->
            <div class="info-card" style="padding: 0; overflow: hidden;">
                <div class="clickable-header" onclick="toggleDetails('details-vak')" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; border: none; padding: 0;">🦅 Категории ВАК и Белый список</h2>
                    <span style="color: #dc2626; font-weight: bold; font-size: 0.85rem;">Развернуть ➔</span>
                </div>
                <div id="details-vak" class="details-content" style="padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px dashed #e5e7eb;">
                    <p class="card-subtitle text-red" style="margin-top: 0.5rem;">Российская система оценки</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                        В РФ Высшая аттестационная комиссия (<strong>ВАК</strong>) жестко регулирует список журналов, публикации в которых признаются при защите диссертаций. Все они разделены на три лиги:
                    </p>
                    <div class="guidelines-list" style="margin-bottom: 0.5rem;">
                        <p>• <strong>К1 (Высшая лига):</strong> Лучшие academic издания России со строжайшим рецензированием.</p>
                        <p style="margin-top: 0.25rem;">• <strong>К2 и К3:</strong> Профильные и развивающиеся издания среднего и начального уровня.</p>
                    </div>
                    <div class="warning-box">
                        <strong>⭐️ Что такое «Белый список»?</strong><br>
                        Это единый государственный реестр надежных научных журналов, созданный Министерством науки и высшего образования РФ.<br>
                        🔗 <strong>Официальный сайт:</strong> <a href="https://journalrank.rcsi.science/ru/" target="_blank" style="color: #b91c1c; font-weight: bold; text-decoration: underline;">journalrank.rcsi.science («Белый список»)</a>
                    </div>
                </div>
            </div>
            <!-- 4. Индекс Хирша -->
            <div class="info-card" style="padding: 0; overflow: hidden;">
                <div class="clickable-header" onclick="toggleDetails('details-hirsch')" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; border: none; padding: 0;">📈 Индекс Хирша (h-индекс)</h2>
                    <span style="color: #2563eb; font-weight: bold; font-size: 0.85rem;">Развернуть ➔</span>
                </div>
                <div id="details-hirsch" class="details-content" style="padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px dashed #e5e7eb;">
                    <p class="card-subtitle text-blue" style="margin-top: 0.5rem;">Личный баланс продуктивности ученого</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                        Эта метрика оценивает одновременно и количество научных статей исследователя, и их востребованность коллегами. 
                    </p>
                    <div style="background-color: #eff6ff; color: #1e3a8a; font-size: 0.75rem; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 0.75rem; line-height: 1.4;">
                        Индекс Хирша равен <strong>h</strong>, если у ученого есть как минимум <strong>h</strong> статей, каждую из которых процитировали не менее <strong>h</strong> раз.
                    </div>
                    <p style="font-size: 0.75rem; font-weight: bold; color: #6b7280; text-transform: uppercase; margin-bottom: 0.25rem;">Пример «на пальцах»:</p>
                    <div class="chemists-grid">
                        <div class="chemist-item"><strong>Химик А:</strong> 1 статья, но прорывная (100 цитирований) ➔ <strong>h = 1</strong></div>
                        <div class="chemist-item"><strong>Химик Б:</strong> 50 пустых статей (по 1 цитированию) ➔ <strong>h = 1</strong></div>
                        <div class="chemist-item" style="background-color: #f0fdf4; border: 1px solid #bbf7d0;"><strong>Химик В:</strong> 5 статей, и каждую цитировали по 5 раз ➔ <strong style="color: #166534;">h = 5</strong> (Баланс)</div>
                    </div>
                </div>
            </div>

            <!-- 5. eLIBRARY -->
            <div class="info-card" style="padding: 0; overflow: hidden;">
                <div class="clickable-header" onclick="toggleDetails('details-elibrary')" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; border: none; padding: 0;">🇷🇺 Платформа eLIBRARY.ru (РИНЦ)</h2>
                    <span style="color: #4f46e5; font-weight: bold; font-size: 0.85rem;">Развернуть ➔</span>
                </div>
                <div id="details-elibrary" class="details-content" style="padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px dashed #e5e7eb;">
                    <p class="card-subtitle text-indigo" style="margin-top: 0.5rem;">Главный академический хаб России</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                        <strong>eLIBRARY.ru</strong> — крупнейшая электронная библиотека научных публикаций в РФ, на базе которой рассчитывается Российский индекс научного цитирования (РИНЦ).
                    </p>
                    <div class="guidelines-list" style="margin-bottom: 0.5rem;">
                        <p>👤 <strong>Регистрация:</strong> Зайдите на сайт <a href="https://elibrary.ru" target="_blank" style="color: #4f46e5; font-weight: bold; text-decoration: underline;">elibrary.ru</a>, заполните анкету в разделе «Регистрация автора» или обычного пользователя.</p>
                        <p style="margin-top: 0.25rem;">🔍 <strong>Как искать статьи:</strong> Используйте «Расширенный поиск». Можно фильтровать по ключевым словам, годам выпуска, тематике ВАК и ставить галочку «искать только в журналах из Ядра РИНЦ».</p>
                    </div>
                    <div style="background-color: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.75rem; color: #374151; line-height: 1.4;">
                        <strong>📊 Какую информацию можно извлечь со смартфона:</strong><br>
                        • <strong>О журнале:</strong> Входит ли в ВАК (К1–К3), Ядро РИНЦ или «Белый список», его текущий импакт-фактор.<br>
                        • <strong>О статье:</strong> Полный текст или аннотацию, список использованной литературы и точное число её цитирований другими авторами.<br>
                        • <strong>Об авторе:</strong> Его место работы (институт), полный список публикаций и индекс Хирша исследователя.
                    </div>
                </div>
            </div>

            <!-- 6. Google Scholar -->
            <div class="info-card" style="padding: 0; overflow: hidden;">
                <div class="clickable-header" onclick="toggleDetails('details-scholar')" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; border: none; padding: 0;">🌐 Поисковая система Google Scholar</h2>
                    <span style="color: #059669; font-weight: bold; font-size: 0.85rem;">Развернуть ➔</span>
                </div>
                <div id="details-scholar" class="details-content" style="padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px dashed #e5e7eb;">
                    <p class="card-subtitle text-emerald" style="margin-top: 0.5rem;">Мировой радар научной периодики</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                        <strong>Google Scholar (Гугл Академия)</strong> — бесплатный поисковик, индексирующий полные тексты рецензируемых статей, диссертаций, книг и патентов крупнейших научных издательств планеты.<br>
                        🔗 <strong>Официальный сайт:</strong> <a href="https://google.com" target="_blank" style="color: #059669; font-weight: bold; text-decoration: underline;">://google.com</a>
                    </p>
                    <div class="guidelines-list" style="margin-bottom: 0.5rem;">
                        <p>🔍 <strong>Как искать:</strong> Введите ключевые слова на английском (например: <em>"polyvinyl alcohol electrospinning"</em>). Система автоматически отсечет блоги и Википедию, выдав только строгие научные труды.</p>
                    </div>
                    <div class="warning-box" style="background-color: #ecfdf5; border-left-color: #10b981; color: #064e3b;">
                        <strong>📱 Главный лайфхак для смартфона:</strong><br>
                        Под карточкой каждой статьи найдите ссылку <strong>«Цитируется по...»</strong>. Кликнув на нее пальцем на экране телефона, вы мгновенно развернете цепочку всех свежих мировых публикаций, которые сослались на эту работу.
                    </div>
                </div>
            </div>
        </div>
    `;
    // Блок 2. Содержимое вкладки "Детектив"
    const detectiveHTML = `
        <div class="fade-in">
            <div class="info-card">
                <h2>🕵️‍♂️ Практикум: Химический детектив</h2>
                <p class="card-subtitle text-indigo">Верификация новостей со смартфона</p>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.75rem;">
                    Журналисты часто искажают химические факты ради громких заголовков. Проведите расследование прямо с экрана телефона.
                </p>
                <div class="guidelines-list">
                    <p><strong>1. Поиск оригинала:</strong> Возьмите выданную новость из СМИ, переведите ключевые слова на английский и найдите исходную научную статью в <strong>Google Scholar</strong>.</p>
                    <p style="margin-top: 0.5rem;"><strong>2. Проверка журнала:</strong> Скопируйте название журнала и вбейте его на мобильной версии сайта <strong>SCImago Journal Rank (SJR)</strong>.</p>
                    <p style="margin-top: 0.5rem;"><strong>3. Поиск квартиля:</strong> Прокрутите вниз до таблицы. Определите цвет за последний год (🟩 Q1, 🟨 Q2, 🟧 Q3, 🟥 Q4).</p>
                    <p style="margin-top: 0.5rem;"><strong>4. Вердикт:</strong> Сравните реальные выводы авторов статьи с заявлениями прессы. Напишите в рабочий чат, соврали ли журналисты.</p>
                </div>
            </div>

            <div class="info-card">
                <h2>📑 Аналитический кейс: Слепой реферат</h2>
                <p class="card-subtitle text-blue">Работа с англоязычной периодикой</p>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                    Изучите аннотации двух найденных статей уровня Q1/Q2 по вашей индивидуальной теме. Сформируйте в заметках телефона краткую записку на русском языке (5–7 предложений).
                </p>
                <div style="background-color: #f5f3ff; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.75rem; color: #1e1b4b; line-height: 1.4;">
                    <strong>Что обязательно должно быть в записке:</strong><br>
                    • Какую конкретно фундаментальную проблему решали авторы?<br>
                    • Какой метод исследования или синтеза полимеров/материалов был выбран?<br>
                    • Каков главный практический результат работы?
                </div>
            </div>
        </div>
    `;

    // Блок 3. Содержимое вкладки "PubChem"
    const pubchemHTML = `
        <div class="fade-in">
            <div class="info-card">
                <h2>🧬 Мобильный тренажер: PubChem</h2>
                <p class="card-subtitle text-emerald">Навигация по хемоинформационным ресурсам</p>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                    Мы не используем тяжелый софт для ПК (ChemDraw/MarvinSketch). Вся аналитика идет через крупнейшую базу данных PubChem прямо в мобильном браузере.
                </p>
                <div class="guidelines-list">
                    <p style="font-weight: bold; color: #4b5563; margin-bottom: 0.25rem;">КЛЮЧЕВЫЕ ДЕСКРИПТОРЫ МОЛЕКУЛЫ ДЛЯ АНАЛИЗА:</p>
                    <p>• <strong>Molecular Weight:</strong> Точная молекулярная масса соединения (г/моль).</p>
                    <p style="margin-top: 0.25rem;">• <strong>LogP:</strong> Коэффициент распределения (оценка гидрофобности, растворимости и способности проникать сквозь мембраны).</p>
                    <p style="margin-top: 0.25rem;">• <strong>TPSA:</strong> Топологическая полярная поверхность молекулы, определяющая её биодоступность.</p>
                </div>
            </div>

            <div class="info-card">
                <h2>💳 Практическая работа: Цифровой паспорт молекулы</h2>
                <p class="card-subtitle text-red">Регламент генерации отчета со смартфона</p>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">
                    Найдите выданную вам молекулу в PubChem, соберите физико-химические константы и отправьте заполненный паспорт через итоговую Google-форму.
                </p>
                <div style="background-color: #fef2f2; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.75rem; color: #450a0a; line-height: 1.4;">
                    <strong>Обязательная структура паспорта:</strong><br>
                    1. Название вещества + систематическое имя по IUPAC.<br>
                    2. Брутто-формула.<br>
                    3. Физико-химический блок (Вес, LogP, TPSA).<br>
                    4. Проверка «правила пяти» Липинского для лекарств.<br>
                    5. Скриншот трехмерной (3D) модели молекулы с экрана смартфона.
                </div>
            </div>
        </div>
    `;

    // Функция сброса активных классов с кнопок меню
    function resetTabs() {
        btnTheory.classList.remove("active");
        btnDetective.classList.remove("active");
        btnPubchem.classList.remove("active");
    }

    // Слушатели кликов по вкладкам
    btnTheory.addEventListener("click", () => {
        resetTabs();
        btnTheory.classList.add("active");
        contentArea.innerHTML = theoryHTML;
    });

    btnDetective.addEventListener("click", () => {
        resetTabs();
        btnDetective.classList.add("active");
        contentArea.innerHTML = detectiveHTML;
    });

    btnPubchem.addEventListener("click", () => {
        resetTabs();
        btnPubchem.classList.add("active");
        contentArea.innerHTML = pubchemHTML;
    });

    // По умолчанию открываем вкладку Теория при первой загрузке
    btnTheory.click();
});

// Глобальная функция для раскрытия и скрытия блоков (аккордеон)
function toggleDetails(elementId) {
    const detailsBlock = document.getElementById(elementId);
    if (detailsBlock) {
        detailsBlock.classList.toggle("show");
        
        // Меняем текст стрелочки на кнопке
        const headerBlock = detailsBlock.previousElementSibling;
        const arrow = headerBlock.querySelector("span");
        if (arrow) {
            if (detailsBlock.classList.contains("show")) {
                arrow.innerText = "Свернуть ▴";
            } else {
                arrow.innerText = "Развернуть ➔";
            }
        }
    }
}
