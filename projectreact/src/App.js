import React from 'react';
import './App.css';
import Episode from './episodeComponent';
import Character from './characters';

function App(){
  return(
    <div className="app">
      <h1>La casa de papel</h1>

      <div className="wallpaper"></div>

      <Episode title="Episode 1" name="Do as Planned">In the aftermath of a failed bank robbery by a woman named "Tokyo," a man called "the Professor" saves her from being caught by the police and proposes her a heist of drastic proportions. After a brief outline of the planned heist, the Professor, artfully guides a group of robbers: Tokyo, Rio, Berlin, Nairobi, Denver, Moscow, Oslo, and Helsinki to invade the Royal Mint of Spain in red jumpsuits and Salvador Dalí masks and take hold of 67 hostages as part of their plan to print and escape with €2.4 billion.<br></br><br></br>The police investigator Raquel Murillo is put in charge of the case, but she remains completely unaware that the mastermind behind the heist is sidling towards her and getting closer than she could ever have imagined.</Episode>
      <Episode title="Episode 2" name="Lethal Negligence">The robbers begin to print the money while Arturo Román, one of the hostages, starts making plans for escaping, assisted by his secretary and mistress Mónica Gaztambide, who is pregnant with his child. She is caught with a concealed cell phone and Berlin orders Denver to kill her. Meanwhile, Rio makes a mistake that leads to his and Tokyo's identities being discovered by the police.</Episode>
      <Episode title="Episode 3" name="Misfire">Believing that Denver executed Mónica under Berlin's orders, Moscow, Denver's father, is devastated and attempts to turn himself in but is dissuaded by his own son. In the meantime, Raquel's relationship with her new friend Salva becomes more intimate, totally oblivious to the fact that it is a pseudonym assumed by the Professor.</Episode>

      
      <Character />
    </div>
  );
}

export default App;
