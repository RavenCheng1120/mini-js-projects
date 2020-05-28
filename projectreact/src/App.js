import React, {useState} from 'react';
import './App.css';
import Episode from './episodeComponent';
import Character from './characters';
import moneyHeist from './img/moneyHeist.png';

const paragraph = ["In the aftermath of a failed bank robbery by a woman named \"Tokyo,\" a man called \"the Professor\" saves her from being caught by the police and proposes her a heist of drastic proportions. After a brief outline of the planned heist, the Professor, artfully guides a group of robbers: Tokyo, Rio, Berlin, Nairobi, Denver, Moscow, Oslo, and Helsinki to invade the Royal Mint of Spain in red jumpsuits and Salvador Dalí masks and take hold of 67 hostages as part of their plan to print and escape with €2.4 billion. The police investigator Raquel Murillo is put in charge of the case, but she remains completely unaware that the mastermind behind the heist is sidling towards her and getting closer than she could ever have imagined.", 
"The robbers begin to print the money while Arturo Román, one of the hostages, starts making plans for escaping, assisted by his secretary and mistress Mónica Gaztambide, who is pregnant with his child. She is caught with a concealed cell phone and Berlin orders Denver to kill her. Meanwhile, Rio makes a mistake that leads to his and Tokyo's identities being discovered by the police.", 
"Believing that Denver executed Mónica under Berlin's orders, Moscow, Denver's father, is devastated and attempts to turn himself in but is dissuaded by his own son. In the meantime, Raquel's relationship with her new friend Salva becomes more intimate, totally oblivious to the fact that it is a pseudonym assumed by the Professor.", 
"Raquel sends her police partner Ángel Rubio undercover with a medical team that is allowed inside the Mint to treat Arturo, who was mistakenly shot for one of the robbers by the police. However, the Professor sees through her move and comes up with his own plan to gain an advantage on her by inserting a bug in Ángel's glasses.", 
"The Professor runs ahead of the police to get rid of an important piece of evidence that can endanger his plans, their finger prints in a car at a scrap yard that Helsinki neglected to destroy. Meanwhile, Denver treats Mónica in a secret location after he shot her leg to fake her execution, and they end up becoming closer.",
"As the Professor rushes out of the scrap yard, a man sees him. The Professor threatens to kill the man's family if the facial composite of his description looks like him. Berlin discovers that Denver did not kill Mónica as ordered and believing that his identity was exposed because of him, comes close to executing him for his disobedience.",
"The robbers initiate a plan to use the hostages to stall the police and gain more time, but Raquel takes the chance to reveal a secret that Berlin has kept from the others—he only has a few months left to live due to a terminal illness—increasing the mistrust among them and makes an attempt to convince Rio to surrender.",
"Raquel loses her trust in Ángel, who is unaware of the bug the robbers planted in his glasses, while Arturo prepares another plan to escape, but becomes devastated upon discovering Mónica and Denver's affair. Ángel, who is taken off the case, is in a coma after a car accident while drunk, discovered the Professor's identity through fingerprints taken from his cider factory—a front for his hideout.",
"Thanks to Arturo's plan, 16 hostages manage to escape and Oslo is on the brink of death after he is beaten by some of the hostages. Before his car accident, Ángel had left several voice mails on Raquel's mobile phone, as well as one on her landline, exclaiming that Salva was the one behind the heist. Raquel's mother, who has Alzheimer's disease, listens to Ángel's message, writes it down, and tries calling Raquel's phone. When Raquel does not answer, she calls Salva for him to pass along the message. The Professor realises that he must kill Raquel's mother. He goes to her home and poisons her coffee, but cannot go through with it and slaps the cup out of her hand. When she thinks it was her fault, he realises that she has Alzheimer's disease and simply deletes the messages and her note. Later, Raquel brings Salva along to Toledo and finds the robbers' villa, where they planned the heist.",
"A team of police are brought to the discovered villa and search through \"evidence\" planted by the Professor earlier. Raquel's ex-husband Alberto is called in to lead the forensics examination, and finds burned evidence on the Professor in the chimney. Salva gets a ride back to Madrid with Alberto, and purposely causes a fight with Alberto, leaving him unconscious for a short period of time, enough time to erase that piece of evidence that can compromise him. When Alberto awakes, he arrests the Professor and brings him to jail. The Professor uses the bathroom at the prison and beats himself up to make it look like it was done by Alberto. He calls Raquel who helps release him. Meanwhile, the robbers start losing hope after many hours without news from the Professor, and Tokyo begins a mutiny after becoming restless."];


function App(){
  const [pageNumber, setPage] = useState(1);

  const turnPage = () => {
    if(pageNumber < 2)
      setPage(pageNumber+1);
  };

  const turnbackPage = () => {
    if(pageNumber > 1)
      setPage(pageNumber-1);
  };

  return(
    <div className="app">
      <img className="icon" src={moneyHeist} alt=""/>
      <h1>La casa de papel</h1>

      <div className="wallpaper"></div>

      { pageNumber === 1 ? <Episode title="Episode 1" name="Do as Planned">{paragraph[0]}</Episode> : <Episode title="Episode 6" name="The Hot Cold War">{paragraph[5]}</Episode> }
      { pageNumber === 1 ? <Episode title="Episode 2" name="Lethal Negligence">{paragraph[1]}</Episode> : <Episode title="Episode 7" name="Cool Instability">{paragraph[6]}</Episode> }
      { pageNumber === 1 ? <Episode title="Episode 3" name="Misfire">{paragraph[2]}</Episode> : <Episode title="Episode 8" name="You Asked for It">{paragraph[7]}</Episode> }
      { pageNumber === 1 ? <Episode title="Episode 4" name="Trojan Horse">{paragraph[3]}</Episode> : <Episode title="Episode 9" name="Whoever Keeps Trying It, Gets It">{paragraph[8]}</Episode> }
      { pageNumber === 1 ? <Episode title="Episode 5" name="Groundhog Day">{paragraph[4]}</Episode> : <Episode title="Episode 10" name="Masked No Longer">{paragraph[9]}</Episode> }
      
      { pageNumber === 2 ? <button className="prevPage nextPage" onClick={turnbackPage}>Prev page{"<"}</button> : <button className="nextPage" onClick={turnPage}>Next page></button>}

      <Character />
    </div>
  );
}

export default App;
