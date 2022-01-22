import React from 'react';
import './Form.css'

const Form1 = (props) => <div className='form-container'>
  <h2 className='title'>Welcome! First things first...</h2>
  <p className='subtitle'>You can always change them later</p>
  <form onSubmit={(e)=>{e.preventDefault();props.goToNextPage()}}>
    <label>Full Name</label>
    <input type='text' required placeholder='Steve Jobs' />
    <label>Display Name</label>
    <input type='text' required placeholder='Steve' />
    <button type='submit'>Create WorkSpace</button>
  </form>
</div>;

const Form2 = (props) => <div className='form-container'>
  <h2 className='title'>Let's set up a home for all your work</h2>
  <p className='subtitle'>You can always change them later</p>
  <form onSubmit={(e)=>{e.preventDefault();props.goToNextPage()}}>
    <label>Workspace Name</label>
    <input type='text' required placeholder='Eden' />
    <label>WorkSpace URL</label>
    <div className='url-field'>
      <input className="url-disabled" required disabled placeholder='www.cutshort.com/' />
      <input className="url-input" required type='text' placeholder='Example' />
    </div>

    <button type='submit'>Create WorkSpace</button>
  </form>
</div>;

const Form3 = (props) =>{ 
const [selected,setSelected]=React.useState(1);
return <div className='form-container'>
  <h2 className='title'>How are you planning to use Eden? </h2>
  <p className='subtitle'>We'll streamline your setup experience accordingly.</p>
  <form onSubmit={(e)=>{e.preventDefault();props.goToNextPage()}} >
    <div className='cards'>
      <div onClick={()=>setSelected(1)} className={selected===1?'card1-selected':'card1'}>
      <img className="card-img" alt="good tweak for seo" src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png"/>
        <span className='card-title' >For myself</span>
        <div className='card-descript'>Write better. Think more clearly. Stay organized</div>
      </div>
      <div onClick={()=>setSelected(2)} className={selected===2?'card2-selected':'card2'}>
      <img  alt="" className="card-img" src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/000000/external-team-business-and-finance-sbts2018-solid-sbts2018.png"/>
        <span className='card-title'>With my team</span>
        <div className='card-descript'>Wikis,docs,tasks & projects, all in one place.</div>
      </div>
    </div>

    <button type='submit'>Create WorkSpace</button>
  </form>
</div>;}

const Form4 = (props)=><div>
  <div className='checkmark'>&#10003;</div>
  <h2 className='title'>Congratulations, Eren! </h2>
  <p className='subtitle'>You have completed onboarding, you can start using the Eden.</p>
  <button type='submit'>Launch Edent</button>
</div>

const displayForm = props => {
  const {page}=props
   switch(page){
     case 1: return <Form1 {...props}/>;
     case 2: return <Form2 {...props}/>
     case 3: return <Form3 {...props} />;
     case 4: return <Form4 {...props}/>;
     default: return <Form1 {...props}/>
   }
}
export default function Form(props) {
  return displayForm(props)
}
