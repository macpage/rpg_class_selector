// Model
function rpg_class(name, health, damage, defense) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.defense = defense;
}

let rpg_classes = [];
rpg_classes[0] = new rpg_class('Mage', 750, 1250, 1000);
rpg_classes[1] = new rpg_class('Warrior', 1000, 1000, 1000);
rpg_classes[2] = new rpg_class('Priest', 1250, 500, 1250);

function create_user(username, rpg_class) {
  this.username = username;
  this.rpg_class = rpg_class;
}

// imgs
// Hair
const hair_img = document.createElement('img');
const hair_styles = [];
hair_styles[0] = 'pics/hair_styles/hair_style_0.png';
hair_styles[1] = 'pics/hair_styles/hair_style_1/hair_style_1_black.png';
hair_styles[2] = 'pics/hair_styles/hair_style_2/hair_style_2_black.png';
hair_styles[3] = 'pics/hair_styles/hair_style_3/hair_style_3_black.png';
hair_styles[4] = 'pics/hair_styles/hair_style_4/hair_style_4_black.png';
hair_styles[5] = 'pics/hair_styles/hair_style_5/hair_style_5_black.png';

const hair_style_1_colors = [];
hair_style_1_colors[0] = 'pics/hair_styles/hair_style_1/hair_style_1_black.png';
hair_style_1_colors[1] = 'pics/hair_styles/hair_style_1/hair_style_1_brown.png';
hair_style_1_colors[2] = 'pics/hair_styles/hair_style_1/hair_style_1_red.png';
hair_style_1_colors[3] = 'pics/hair_styles/hair_style_1/hair_style_1_blond.png';
hair_style_1_colors[4] = 'pics/hair_styles/hair_style_1/hair_style_1_grey.png';
hair_style_1_colors[5] = 'pics/hair_styles/hair_style_1/hair_style_1_white.png';

const hair_style_2_colors = [];
hair_style_2_colors[0] = 'pics/hair_styles/hair_style_2/hair_style_2_black.png';
hair_style_2_colors[1] = 'pics/hair_styles/hair_style_2/hair_style_2_brown.png';
hair_style_2_colors[2] = 'pics/hair_styles/hair_style_2/hair_style_2_red.png';
hair_style_2_colors[3] = 'pics/hair_styles/hair_style_2/hair_style_2_blond.png';
hair_style_2_colors[4] = 'pics/hair_styles/hair_style_2/hair_style_2_grey.png';
hair_style_2_colors[5] = 'pics/hair_styles/hair_style_2/hair_style_2_white.png';

const hair_style_3_colors = [];
hair_style_3_colors[0] = 'pics/hair_styles/hair_style_3/hair_style_3_black.png';
hair_style_3_colors[1] = 'pics/hair_styles/hair_style_3/hair_style_3_brown.png';
hair_style_3_colors[2] = 'pics/hair_styles/hair_style_3/hair_style_3_red.png';
hair_style_3_colors[3] = 'pics/hair_styles/hair_style_3/hair_style_3_blond.png';
hair_style_3_colors[4] = 'pics/hair_styles/hair_style_3/hair_style_3_grey.png';
hair_style_3_colors[5] = 'pics/hair_styles/hair_style_3/hair_style_3_white.png';

const hair_style_4_colors = [];
hair_style_4_colors[0] = 'pics/hair_styles/hair_style_4/hair_style_4_black.png';
hair_style_4_colors[1] = 'pics/hair_styles/hair_style_4/hair_style_4_brown.png';
hair_style_4_colors[2] = 'pics/hair_styles/hair_style_4/hair_style_4_red.png';
hair_style_4_colors[3] = 'pics/hair_styles/hair_style_4/hair_style_4_blond.png';
hair_style_4_colors[4] = 'pics/hair_styles/hair_style_4/hair_style_4_grey.png';
hair_style_4_colors[5] = 'pics/hair_styles/hair_style_4/hair_style_4_white.png';

const hair_style_5_colors = [];
hair_style_5_colors[0] = 'pics/hair_styles/hair_style_5/hair_style_5_black.png';
hair_style_5_colors[1] = 'pics/hair_styles/hair_style_5/hair_style_5_brown.png';
hair_style_5_colors[2] = 'pics/hair_styles/hair_style_5/hair_style_5_red.png';
hair_style_5_colors[3] = 'pics/hair_styles/hair_style_5/hair_style_5_blond.png';
hair_style_5_colors[4] = 'pics/hair_styles/hair_style_5/hair_style_5_grey.png';
hair_style_5_colors[5] = 'pics/hair_styles/hair_style_5/hair_style_5_white.png';

// Eye
const eye_img = document.createElement('img');
const eye_styles = [];
eye_styles[0] = 'pics/eye_styles/eye_style_0/eye_style_0_black.png';
eye_styles[1] = 'pics/eye_styles/eye_style_1.png';
eye_styles[2] = 'pics/eye_styles/eye_style_2.png';

const eye_style_0_colors = [];
eye_style_0_colors[0] = 'pics/eye_styles/eye_style_0/eye_style_0_black.png';
eye_style_0_colors[1] = 'pics/eye_styles/eye_style_0/eye_style_0_brown.png';
eye_style_0_colors[2] = 'pics/eye_styles/eye_style_0/eye_style_0_grey.png';
eye_style_0_colors[3] = 'pics/eye_styles/eye_style_0/eye_style_0_blue.png';
eye_style_0_colors[4] = 'pics/eye_styles/eye_style_0/eye_style_0_green.png';
eye_style_0_colors[5] = 'pics/eye_styles/eye_style_0/eye_style_0_mix.png';

const user = new create_user('Mac', rpg_classes[0]);
console.log(rpg_classes[0].name);
// View
const body = document.querySelector('body');
const menu = document.createElement('div');
const create_box = document.createElement('div');
const title = document.createElement('p');

const username = document.createElement('input');
const username_btn = document.createElement('button');

const box_background = document.createElement('div');
const greetings_text = document.createElement('h1');
const under_text = document.createElement('h2');
const mage_section = document.createElement('div');
const warrior_section = document.createElement('div');
const priest_section = document.createElement('div');

// Menu erstellen
function create_menu() {
  menu.setAttribute('id', 'menu');
  body.append(menu);
}

// Input für username erstellen
function create_name_input() {
  create_box.setAttribute('id', 'create_box');
  create_box.classList.add('stretchOut');
  username.setAttribute('id', 'username_input');
  username_btn.setAttribute('id', 'username_btn');
  username_btn.innerHTML = 'OK';
  username.placeholder = 'Enter your Name...';
  title.innerHTML = 'Welcome to RPG Character Creator';
  title.setAttribute('id', 'title');
  create_box.append(title);
  create_box.append(username);
  create_box.append(username_btn);
  menu.append(create_box);
}

// Class selection
function class_select() {
  create_box.style.justifyContent = 'start';
  create_box.classList.add('stretchMore');
  create_box.style.width = '50vw';
  create_box.style.height = '65vh';
  user.username = username.value;
  username.remove();
  username_btn.remove();
  title.remove();

  // Add new scene
  box_background.classList.add('box_background');
  create_box.append(box_background);
  greetings_text.innerHTML = 'Hallo ' + user.username;
  greetings_text.classList.add('greetings_text');
  box_background.append(greetings_text);

  under_text.innerHTML = 'Wähle deine Klasse: ';
  under_text.classList.add('under_text');
  box_background.append(under_text);

  box_background.append(mage_section);
  mage_section.classList.add('class_section');
  box_background.append(warrior_section);
  warrior_section.classList.add('class_section');
  box_background.append(priest_section);
  priest_section.classList.add('class_section');

  document.querySelectorAll('.class_section').forEach((e, index) => {
    const class_pic = document.createElement('img');
    if (index == 0) {
      class_pic.src = '/Users/mac/repos/rpg_class_selector/pics/mage.png';
    } else if (index == 1) {
      class_pic.src = 'pics/warrior.png';
    } else if (index == 2) {
      class_pic.src = 'pics/priest.png';
    }
    const class_stats = document.createElement('table');
    class_stats.classList.add('class_stats');
    const tr_1 = document.createElement('tr');
    const td_1 = document.createElement('td');
    const td_2 = document.createElement('td');

    const tr_2 = document.createElement('tr');
    const td_3 = document.createElement('td');
    const td_4 = document.createElement('td');

    const tr_3 = document.createElement('tr');
    const td_5 = document.createElement('td');
    const td_6 = document.createElement('td');

    const tr_4 = document.createElement('tr');
    const td_7 = document.createElement('td');
    const td_8 = document.createElement('td');

    td_1.innerHTML = 'Class:';
    td_2.innerHTML = rpg_classes[index].name;

    td_3.innerHTML = 'Health:';
    td_4.innerHTML = rpg_classes[index].health;

    td_5.innerHTML = 'Strength:';
    td_6.innerHTML = rpg_classes[index].damage;

    td_7.innerHTML = 'Defense:';
    td_8.innerHTML = rpg_classes[index].defense;
    e.append(class_pic);
    e.append(class_stats);
    class_stats.append(tr_1);
    tr_1.append(td_1);
    tr_1.append(td_2);
    class_stats.append(tr_2);
    tr_2.append(td_3);
    tr_2.append(td_4);
    class_stats.append(tr_3);
    tr_3.append(td_5);
    tr_3.append(td_6);
    class_stats.append(tr_4);
    tr_4.append(td_7);
    tr_4.append(td_8);

    td_1.style.fontWeight = 'bold';
    td_1.style.fontSize = '18px';
    td_3.style.fontWeight = 'bold';
    td_3.style.fontSize = '18px';
    td_5.style.fontWeight = 'bold';
    td_5.style.fontSize = '18px';
    td_7.style.fontWeight = 'bold';
    td_7.style.fontSize = '18px';

    e.addEventListener('click', () => {
      set_up_creator();
    });
  });

  setTimeout(() => {
    document.querySelectorAll('.class_section').forEach((e) => {
      e.classList.add('rollOut');
      console.log('ooohh');
    });
  }, 1500);
}

// Character Creator
const char_creator = document.createElement('div');
char_creator.setAttribute('id', 'char_creator');
const selectors = document.createElement('div');
selectors.setAttribute('id', 'selectors');
const char_preview = document.createElement('div');
char_preview.setAttribute('id', 'char_preview');

function set_up_creator() {
  box_background.remove();
  create_box.append(char_creator);
  char_creator.append(selectors);
  char_creator.append(char_preview);
  create_box.classList.add('stretchMore2');
  create_box.style.width = '60vw';
  create_box.style.height = '75vh';

  // Selectors
  // Hair
  const hair_selector = document.createElement('div');
  const hair_selector_name = document.createElement('p');
  const hair_selector_back_btn = document.createElement('button');
  const hair_selector_num = document.createElement('p');
  const hair_selector_forward_btn = document.createElement('button');

  hair_selector.setAttribute('id', 'hair_selector');
  hair_selector.setAttribute('class', 'selector');
  hair_selector.classList.add('hair');

  hair_selector_name.innerHTML = 'Hair';
  let hair_num = 0;
  hair_selector_num.innerHTML = hair_num;
  selectors.append(hair_selector);
  hair_selector.append(hair_selector_name);
  hair_selector.append(hair_selector_back_btn);
  hair_selector.append(hair_selector_num);
  hair_selector.append(hair_selector_forward_btn);

  function hair_change_style() {
    char_preview.append(hair_img);
    hair_img.src = hair_styles[hair_num];
    hair_selector_back_btn.addEventListener('click', () => {
      hair_num--;
      hair_selector_num.innerHTML = hair_num;
      hair_img.src = hair_styles[hair_num];
      if (hair_num == 0 && document.getElementById('color_selector')) {
        document.getElementById('color_selector').remove();
      }
    });
    hair_selector_forward_btn.addEventListener('click', () => {
      hair_num++;
      hair_selector_num.innerHTML = hair_num;
      hair_img.src = hair_styles[hair_num];
      if (hair_num == 0 && document.getElementById('color_selector')) {
        document.getElementById('color_selector').remove();
      }
    });
  }

  // Hair color
  const all_colors = [];

  function select_color(selector) {
    const color_selector = document.createElement('div');
    color_selector.setAttribute('id', 'color_selector');
    color_selector.classList.add('hair');
    char_creator.append(color_selector);

    for (let i = 0; i < 6; i++) {
      console.log(all_colors.length);
      const e = document.createElement('input');
      const labels = document.createElement('label');
      labels.innerHTML = 'lol';
      e.setAttribute('type', 'radio');
      e.setAttribute('name', 'color');
      e.style.height = '2vw';
      e.style.width = '2vw';
      all_colors[i] = e;
      color_selector.append(e);
      color_selector.append(labels);
    }

    all_colors[0].style.backgroundColor = 'black';
    all_colors[1].style.backgroundColor = '#8a6d51';
    all_colors[2].style.backgroundColor = 'red';
    all_colors[3].style.backgroundColor = '#f2da77';
    all_colors[4].style.backgroundColor = 'grey';
    all_colors[5].style.backgroundColor = '#ebebeb';
    all_colors[0].setAttribute('id', 'black');
    all_colors[1].setAttribute('id', 'brown');
    all_colors[2].setAttribute('id', 'red');
    all_colors[3].setAttribute('id', 'blond');
    all_colors[4].setAttribute('id', 'grey');
    all_colors[5].setAttribute('id', 'white');

    all_colors.forEach((e) => {
      e.addEventListener('click', () => {
        change_color(e);
      });
    });

    let num;
    console.log('selector: ' + selector);
    switch (selector) {
      case 'hair':
        num = hair_num;
        console.log('hair num');
        break;

      case 'eye':
        num = eye_num;
        console.log('eye num');
        break;
    }

    function change_color(e) {
      console.log(e.id);

      if (e.id == 'black') {
        switch (hair_num) {
          case 1:
            hair_img.src = hair_style_1_colors[0];
            break;
          case 2:
            hair_img.src = hair_style_2_colors[0];
            break;
          case 3:
            hair_img.src = hair_style_3_colors[0];
            break;
          case 4:
            hair_img.src = hair_style_4_colors[0];
            break;
          case 5:
            hair_img.src = hair_style_5_colors[0];
        }
      }
      if (e.id == 'brown') {
        switch (hair_num) {
          case 1:
            hair_img.src = hair_style_1_colors[1];
            break;
          case 2:
            hair_img.src = hair_style_2_colors[1];
            break;
          case 3:
            hair_img.src = hair_style_3_colors[1];
            break;
          case 4:
            hair_img.src = hair_style_4_colors[1];
            break;
          case 5:
            hair_img.src = hair_style_5_colors[1];
        }
      }
      if (e.id == 'red') {
        switch (hair_num) {
          case 1:
            hair_img.src = hair_style_1_colors[2];
            break;
          case 2:
            hair_img.src = hair_style_2_colors[2];
            break;
          case 3:
            hair_img.src = hair_style_3_colors[2];
            break;
          case 4:
            hair_img.src = hair_style_4_colors[2];
            break;
          case 5:
            hair_img.src = hair_style_5_colors[2];
        }
      }

      if (e.id == 'blond') {
        switch (hair_num) {
          case 1:
            hair_img.src = hair_style_1_colors[3];
            break;
          case 2:
            hair_img.src = hair_style_2_colors[3];
            break;
          case 3:
            hair_img.src = hair_style_3_colors[3];
            break;
          case 4:
            hair_img.src = hair_style_4_colors[3];
            break;
          case 5:
            hair_img.src = hair_style_5_colors[3];
        }
      }

      if (e.id == 'grey') {
        switch (hair_num) {
          case 1:
            hair_img.src = hair_style_1_colors[4];
            break;
          case 2:
            hair_img.src = hair_style_2_colors[4];
            break;
          case 3:
            hair_img.src = hair_style_3_colors[4];
            break;
          case 4:
            hair_img.src = hair_style_4_colors[4];
            break;
          case 5:
            hair_img.src = hair_style_5_colors[4];
        }
      }

      if (e.id == 'white') {
        switch (hair_num) {
          case 1:
            hair_img.src = hair_style_1_colors[5];
            break;
          case 2:
            hair_img.src = hair_style_2_colors[5];
            break;
          case 3:
            hair_img.src = hair_style_3_colors[5];
            break;
          case 4:
            hair_img.src = hair_style_4_colors[5];
            break;
          case 5:
            hair_img.src = hair_style_5_colors[5];
        }
      }
    }
  }

  // Eyes
  const eye_selector = document.createElement('div');
  const eye_selector_name = document.createElement('p');
  const eye_selector_back_btn = document.createElement('button');
  const eye_selector_num = document.createElement('p');
  const eye_selector_forward_btn = document.createElement('button');

  eye_selector.setAttribute('id', 'eye_selector');
  eye_selector.setAttribute('class', 'selector');
  eye_selector.classList.add('eye');

  eye_selector_name.innerHTML = 'Eyes';
  let eye_num = 0;
  eye_selector_num.innerHTML = eye_num;
  selectors.append(eye_selector);
  eye_selector.append(eye_selector_name);
  eye_selector.append(eye_selector_back_btn);
  eye_selector.append(eye_selector_num);
  eye_selector.append(eye_selector_forward_btn);

  function eye_change_style() {
    char_preview.append(eye_img);
    eye_img.src = eye_styles[eye_num];
    eye_selector_back_btn.addEventListener('click', () => {
      eye_num--;
      eye_selector_num.innerHTML = eye_num;
      eye_img.src = eye_styles[eye_num];
    });
    eye_selector_forward_btn.addEventListener('click', () => {
      eye_num++;
      eye_selector_num.innerHTML = eye_num;
      eye_img.src = eye_styles[eye_num];
    });
  }

  // Mouth

  // Skin

  // Outfit

  // Char Preview

  hair_change_style();
  eye_change_style();

  function close_color_selector() {
    const selectors = document.querySelectorAll('.selector');
    selectors.forEach((e) => {
      e.addEventListener('click', () => {
        console.log(e.getAttribute('class'));
        if (document.getElementById('color_selector')) {
          console.log('sadklfjlkjösa');
          if (
            document.getElementById('color_selector').getAttribute('class') ==
            e.getAttribute('class').split(' ')[1]
          ) {
            console.log('found');
          } else {
            document.getElementById('color_selector').remove();
            select_color(e.getAttribute('class').split(' ')[1]);
            document
              .getElementById('color_selector')
              .setAttribute('class', e.getAttribute('class').split(' ')[1]);
          }
        } else {
          select_color(e.getAttribute('class').split(' ')[1]);
          all_colors[0].checked = true;
          console.log('open');
        }
      });
    });
  }

  close_color_selector();
}

create_menu();
create_name_input();
// Controller
console.log(user.rpg_class);
function enter_class_select() {
  username_btn.addEventListener('click', () => {
    class_select();
  });
}

enter_class_select();
