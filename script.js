// Ждем полной загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("content-area");
    const btnTheory = document.getElementById("btn-theory");
    const btnDetective = document.getElementById("btn-detective");
    const btnAbstract = document.getElementById("btn-abstract");

    // Блок 1. Содержимое вкладки "Пара 1: Теория"
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
                        <p>• <strong>К1 (Высшая лига):</strong> Лучшие академические издания России со строжайшим рецензированием.</p>
                        <p style="margin-top: 0.25rem;">• <strong>К2 и К3:</strong> Профильные и развивающиеся издания среднего и начального уровня.</p>
                    </div>
                    <div class="warning-box">
                        <strong>⭐️ Что такое «Белый список»?</strong><br>
                        Это единый государственный реестр надежных научных журналов, созданный Министерством науки и высшего образования РФ.<br>
                        🔗 <strong>Официальный сайт:</strong> <a href="https://rcsi.science" target="_blank" style="color: #b91c1c; font-weight: bold; text-decoration: underline;">journalrank.rcsi.science («Белый список»)</a>
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
                        • <strong>Об авторе:</strong> Его место работы (институт), полный список публикаций и личный индекс Хирша.
                    </div>
                </div>
            </div>
