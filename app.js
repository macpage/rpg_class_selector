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

const user = new create_user('Mac', rpg_classes[0]);
console.log(rpg_classes[0].name);
// View
const body = document.querySelector('body');
const menu = document.createElement('div');
const create_box = document.createElement('div');

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
  create_box.append(username);
  create_box.append(username_btn);
  menu.append(create_box);
}

// Class selection
function class_select() {
  create_box.style.justifyContent = 'start';
  create_box.classList.add('stretchMore');
  create_box.style.width = '50vw';
  create_box.style.height = '60vh';
  user.username = username.value;
  username.remove();
  username_btn.remove();

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

    td_1.innerHTML = 'Class';
    td_2.innerHTML = rpg_classes[index].name;

    td_3.innerHTML = 'Health';
    td_4.innerHTML = rpg_classes[index].health;

    td_5.innerHTML = 'Strength';
    td_6.innerHTML = rpg_classes[index].damage;

    td_7.innerHTML = 'Defense';
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
  });

  setTimeout(() => {
    document.querySelectorAll('.class_section').forEach((e) => {
      e.classList.add('rollOut');
      console.log('ooohh');
    });
  }, 1500);
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
