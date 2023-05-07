// Model
function rpg_class(name, health, damage, defense) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.defense = defense;
}

const mage_class = new rpg_class('Mage', 750, 1250, 1000);

function create_user(username, rpg_class) {
  this.username = username;
  this.rpg_class = rpg_class;
}

const user = new create_user('Mac', mage_class);
// View
const body = document.querySelector('body');
const menu = document.createElement('div');
const create_box = document.createElement('div');

const username = document.createElement('input');
const username_btn = document.createElement('button');

// Menu erstellen
function create_menu() {
  menu.setAttribute('id', 'menu');
  body.append(menu);
}

// Input für username erstellen
function create_name_input() {
  create_box.setAttribute('id', 'create_box');
  username.setAttribute('id', 'username_input');
  username_btn.setAttribute('id', 'username_btn');
  username_btn.innerHTML = 'OK';
  username.placeholder = 'Enter your Name...';
  create_box.append(username);
  create_box.append(username_btn);
  menu.append(create_box);
}

create_menu();
create_name_input();
// Controller
console.log(user.rpg_class);
