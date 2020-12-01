import React, { useState } from 'react';

import './DropDownMenu.styles.scss';

const DropDownMenu = (props) => {
  const { dropDownName, setCurrency, coins, tradeCurrency, id, onChange, value } = props;
  const [open, setOpen] = useState(false);

  const handleClick = (e) => { 
    e.preventDefault();
    
    setOpen(!open);
  };

  return (
    <>
    <div
      id={id}
      className='drop-down-menu' 
      onClick={handleClick}
    >
      {id === 'select-trade-currency' && 
        <input 
          value={tradeCurrency} 
          onChange={onChange} 
          placeholder='Select Trade Currency'>
        </input>
      }
      {id === 'amount' && 
        <input 
          value={value}
          onChange={onChange} 
          placeholder='Amount'>
        </input>
      }
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
      <path d="M4.67824 3.15287L6.51199 1.31758C6.88815 0.94111 7.2643 0.56464 7.64045 0.188169C7.78151 -6.58743e-05 8.04012 -0.0235953 8.2282 0.117581C8.25171 0.141111 8.27522 0.16464 8.29872 0.188169C8.58084 0.470522 8.86296 0.752875 9.14507 1.03523C9.33315 1.1764 9.35666 1.43523 9.2156 1.62346C9.2156 1.62346 9.19209 1.64699 9.16858 1.67052L4.98386 5.83523C4.86631 6.02346 4.60771 6.07052 4.44314 5.95287C4.39612 5.92934 4.37261 5.88229 4.32559 5.83523C2.93852 4.44699 1.55145 3.05876 0.164383 1.67052C-0.0236944 1.52935 -0.047204 1.27052 0.0938539 1.10582C0.117364 1.08229 0.140873 1.05876 0.164383 1.03523C0.446499 0.729346 0.705105 0.470522 0.987221 0.188169C1.26934 -0.0941835 1.45741 -0.0471247 1.69251 0.188169C2.6329 1.10582 3.54977 2.04699 4.49016 2.98817C4.53718 3.03523 4.60771 3.08229 4.67824 3.15287Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="9.33333" height="6" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </div>
    {id === 'select-trade-currency' &&
    <div 
      className={`drop-down-list-items${open ? ' visible' : ''}`}
    >
        <ul>
          <li>{dropDownName}</li>
          {dropDownName === 'Select Trade Currency' && 
            coins.map(coin => <li key={coin.id} onClick={setCurrency}>{coin.name}</li>
          )}
        </ul>
    </div>
      }
    </>
  );
};

export default DropDownMenu;