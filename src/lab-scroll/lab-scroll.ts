import { filter, from, fromEvent, map, Observable, pluck, range } from 'rxjs';

const texto = document.createElement('div');

texto.innerHTML = `Laboris anim mollit exercitation occaecat incididunt. 
<br/><br/>
Voluptate aliqua incididunt dolor adipisicing adipisicing. Esse labore nisi commodo cupidatat do non. i
<br/>
Officia voluptate nostrud cupidatat aliquip magna duis incididunt exercitation. Nulla aliquip 
<br/>
cupidatat qui cillum ut nulla commodo. Duis occaecat quis reprehenderit deserunt tempor sit elit id 
<br/>
laboris id aliquip.

Laborum quis fugiat et in tempor voluptate. Duis cillum consequat ipsum ut. Incididunt in tempor magna consequat irure tempor sunt adipisicing ipsum laborum. Ad pariatur id officia cupidatat minim nisi. Pariatur quis ex duis anim consectetur velit laboris deserunt id esse fugiat ipsum. Commodo eu nulla ipsum laborum velit. Enim aute aliqua incididunt consequat culpa do.

Est exercitation officia sunt commodo quis velit commodo ea incididunt nulla excepteur aute aute sunt. Non proident voluptate ex exercitation. Exercitation deserunt commodo nostrud velit ea. Occaecat nisi proident excepteur ad officia qui eu labore culpa ullamco. Deserunt id enim laboris quis duis elit voluptate veniam non quis duis culpa cupidatat.

Mollit reprehenderit aliquip do amet ipsum irure ut incididunt fugiat eu ea ad. Reprehenderit nisi sint consequat occaecat ipsum aute quis eu ut. Minim eiusmod dolor ex nisi incididunt. Do non nostrud excepteur eu. Ad ea laborum proident duis voluptate veniam officia cupidatat irure qui eu. Pariatur Lorem enim cupidatat nostrud aliqua. Qui tempor do commodo est ut commodo ad.

Duis pariatur anim esse aliqua cillum incididunt. Cillum nulla Lorem non consequat veniam mollit cupidatat ut do cupidatat ad. Do cillum exercitation cillum irure nisi.

Velit excepteur commodo quis labore voluptate voluptate qui nulla ea anim in. Sit et et ad laboris et duis pariatur deserunt mollit deserunt amet id mollit ipsum. Proident ea laborum ad incididunt do veniam veniam adipisicing et aute occaecat in. Nulla eiusmod aliquip cillum voluptate irure duis labore qui in cillum.

Eiusmod ullamco pariatur officia amet elit nisi excepteur non pariatur commodo nostrud in. Culpa voluptate sunt quis excepteur dolor ut nisi reprehenderit tempor ex cupidatat tempor ipsum. In laboris deserunt cillum tempor fugiat officia elit ipsum adipisicing nulla dolor id laboris dolore. Nulla culpa consequat ut mollit ipsum quis sunt aliquip consectetur. Enim duis voluptate commodo proident aute cillum nostrud exercitation ad proident magna nisi. Irure excepteur excepteur consectetur eu ex eu deserunt veniam sint amet tempor nulla aliqua. Ad et aute aliqua consectetur velit ullamco ut excepteur elit minim.

Dolore magna consectetur consequat ut laboris magna commodo veniam. Sint culpa sunt enim id est. Laborum pariatur enim sunt mollit.


Sunt sint esse duis dolore ipsum enim esse in id. Dolor non id irure non minim. Sint aliqua id adipisicing nostrud anim fugiat dolore esse tempor commodo dolor. Amet ex veniam adipisicing laborum. Labore incididunt dolore exercitation nostrud nisi in aliqua cillum culpa tempor dolore nisi.


Tempor consequat minim veniam cillum consectetur consectetur proident irure sint consequat quis. Consectetur irure esse irure amet velit proident proident deserunt nulla ut sint non. Occaecat adipisicing occaecat voluptate occaecat veniam ullamco aute esse ullamco enim excepteur reprehenderit. Esse id do aute velit cupidatat.

Elit sunt aliqua veniam labore id minim culpa pariatur. Occaecat elit sint ex deserunt aute laborum excepteur mollit pariatur. Amet eiusmod labore esse laborum in est laborum.

Deserunt quis irure velit ad. Excepteur magna irure deserunt consequat do sint esse non in eu cupidatat. Nisi et aliqua cillum qui quis ex pariatur sint dolor nisi incididunt. Ipsum voluptate aliquip consectetur incididunt ut aliqua.


`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = event => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(map(event => calcularPorcentajeScroll(event)));

progress$.subscribe(per => {
  progressBar.style.width = `${per}%`;
});
