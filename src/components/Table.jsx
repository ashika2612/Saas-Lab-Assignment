import React from 'react';

const Table = ({ displayedProjects }) => {
  const currencySymbols = {
    usd: '$',
    eur: '€',
    gbp: '£',
    aud: 'A$',
    cad: 'C$',
    chf: 'CHF',
    dkk: 'DKK',
  };

  return (
    <table className='table' aria-label='Kickstarter Projects Table'>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {displayedProjects.map((project) => {
          let currency = project['currency'];
          return (
            <tr key={project['s.no']}>
              <td>{project['s.no']}</td>
              
              <td>
                {project['percentage.funded']
                  ? `${project['percentage.funded']}%`
                  : 'N/A'}
              </td>

              <td>
                {currency && project['amt.pledged']
                  ? currencySymbols[currency.toLowerCase()]
                    ? `${currencySymbols[currency.toLowerCase()]} 
                       ${project['amt.pledged'].toLocaleString()}`
                    : `${currency.toUpperCase()} 
                       ${project['amt.pledged'].toLocaleString()}`
                  : 'N/A'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
