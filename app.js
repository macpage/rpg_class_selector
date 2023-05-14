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
hair_styles[0] = 'pics/pixil-layer-No hair.png';
hair_styles[1] = 'pics/hair_style_1.png';
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
    });
    hair_selector_forward_btn.addEventListener('click', () => {
      hair_num++;
      hair_selector_num.innerHTML = hair_num;
      hair_img.src = hair_styles[hair_num];
    });
  }

  // Hair color
  function select_color() {
    const color_selector = document.createElement('div');
    color_selector.setAttribute('id', 'color_selector');
    char_creator.append(color_selector);

    const all_colors = [];

    for (let i = 0; i < 6; i++) {
      console.log(all_colors.length);
      const e = document.createElement('div');
      e.style.height = '2vw';
      e.style.width = '2vw';

      color_selector.append(e);
    }
  }

  hair_selector.addEventListener('click', () => {
    select_color();
  });
  // Eyes
  const eye_selector = document.createElement('div');
  const eye_selector_name = document.createElement('p');
  const eye_selector_back_btn = document.createElement('button');
  const eye_selector_num = document.createElement('p');
  const eye_selector_forward_btn = document.createElement('button');

  eye_selector.setAttribute('id', 'eye_selector');
  eye_selector.setAttribute('class', 'selector');

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
    eye_img.src = hair_styles[hair_num];
    hair_selector_back_btn.addEventListener('click', () => {
      hair_num--;
      hair_selector_num.innerHTML = hair_num;
      hair_img.src = hair_styles[hair_num];
    });
    hair_selector_forward_btn.addEventListener('click', () => {
      hair_num++;
      hair_selector_num.innerHTML = hair_num;
      hair_img.src = hair_styles[hair_num];
    });
  }

  // Mouth

  // Skin

  // Outfit

  // Char Preview

  hair_change_style();
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
