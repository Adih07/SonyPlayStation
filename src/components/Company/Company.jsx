import React from "react";
import logo from "./imgCompany/Playstation_logo_colour.svg.png";
import controller from "./imgCompany/Controller.png";
import nol from "./imgCompany/NoLCD.png";

const Company = () => {
  return (
    <div>
      <div style={{ marginTop: "15px" }}>
        <span style={{ marginRight: "14px", cursor: "pointer" }}>
          Вы находитесь:
        </span>

        <span style={{ marginRight: "14px", color: "#006C73" }}>Компания</span>
      </div>
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <h2>Компания</h2>
        <p>
          <b>PlayStation</b> (яп. プレイステーション Пурэйсутэ:сён, официальное
          сокр. PS; известна также как PS1 или по кодовому названию PSX[14]) —
          игровая приставка пятого поколения, разработанная компанией Sony
          Computer Entertainment под руководством Кэна Кутараги. Выход приставки
          состоялся 3 декабря 1994 года в Японии[3], в США приставка появилась 9
          сентября 1995 года, а в Европе — 29 сентября 1995 года. Приставка
          является первой игровой системой в линейке PlayStation. В 2000 году
          вышла обновлённая версия приставки под названием PSone, которая
          отличалась от оригинальной PlayStation значительно меньшим размером.
          Приставка оказалась очень популярной, обеспечив Sony прорыв в игровой
          индустрии, где до того момента безраздельно властвовали Nintendo и
          Sega.
        </p>
        <img src={logo} alt="" style={{ width: "260px" }} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>
          Компания Sony начала разработку PlayStation после неудачного
          сотрудничества с Nintendo по созданию периферийного модуля
          компакт-дисков для Super Nintendo Entertainment System в начале 1990-х
          годов. Приставка была в основном разработана Кеном Кутараги и японской
          компанией Sony Computer Entertainment, а дополнительная разработка
          была передана на аутсорсинг в Великобританию. При разработке приставки
          основное внимание уделялось трёхмерной полигональной графике. Процесс
          создания игр для PlayStation был оптимизирован и ориентирован на
          широкую аудиторию, что обеспечило поддержку многих сторонних
          разработчиков.
        </p>
        <img src={controller} alt="" style={{ width: "260px" }} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>
          Приставка оказалась популярной благодаря обширной библиотеке игр,
          популярным франшизам, низкой розничной цене и агрессивному маркетингу
          среди молодёжи. Среди известных серий игр для PlayStation были Gran
          Turismo, Crash Bandicoot, Tomb Raider и Final Fantasy, которые
          породили многочисленные продолжения и способствовали росту продаж
          приставки. Игры для PlayStation продолжали продаваться до тех пор,
          пока 23 марта 2006 года компания Sony не прекратила производство
          приставки и её игр — более чем через одиннадцать лет после выпуска и
          менее чем за год до дебюта PlayStation 3. Всего для приставки было
          выпущено 7 918 игр, а общий объём продаж игр составил 962 миллиона
          единиц. 3 декабря 2018 года в честь 24-й годовщины выпуска
          оригинальной приставки была выпущена миниатюрная версия под названием
          PlayStation Classic, которая включает 20 предустановленных игр, таких
          как Grand Theft Auto, Final Fantasy VII, Tekken 3, Resident Evil[15].
        </p>
        <img src={nol} alt="" style={{ width: "260px" }} />
      </div>
      <div>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/1l2oYzC8Rh8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Company;
