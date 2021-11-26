import { useEffect, useState } from 'react';
// material
import { Typography, AccordionDetails, AccordionSummary, Accordion } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
// components
import FilterDashboard from '../components/FilterDashboard';
import {
  AS_ASSIGNED,
  AS_BARU,
  AS_DIPROSES,
  AS_DITERIMA,
  AS_ESKALASI,
  AS_SELESAI
} from '../datas/aduan-status.data';
//
import './Dashboard.css';

const Dashboard = () => {
  const [totalAduanByStatuses, setTotalAduanByStatuses] = useState([]);

  useEffect(() => {
    let totalTemp = [
      [
        {
          image:
            'https://www.clipartmax.com/png/middle/291-2918987_complaint-comments-complaint-icon.png',
          total: 1200,
          title: AS_BARU.label,
          color: '#ff4804'
        },
        {
          image:
            'https://www.clipartmax.com/png/middle/291-2918987_complaint-comments-complaint-icon.png',
          total: 1010,
          title: AS_ASSIGNED.label,
          color: '#ff9c04'
        }
      ],
      [
        {
          image:
            'https://www.clipartmax.com/png/middle/291-2918987_complaint-comments-complaint-icon.png',
          total: 780,
          title: AS_DITERIMA.label,
          color: '#ffae04'
        },
        {
          image:
            'https://www.clipartmax.com/png/middle/291-2918987_complaint-comments-complaint-icon.png',
          total: 100,
          title: AS_DIPROSES.label,
          color: '#bbbf04'
        }
      ],
      [
        {
          image:
            'https://www.clipartmax.com/png/middle/291-2918987_complaint-comments-complaint-icon.png',
          total: 300,
          title: AS_SELESAI.label,
          color: '#88e104'
        },
        {
          image:
            'https://www.clipartmax.com/png/middle/291-2918987_complaint-comments-complaint-icon.png',
          total: 5,
          title: AS_ESKALASI.label,
          color: '#44e104'
        }
      ]
    ];

    let total = 0;
    totalTemp.forEach((item) => {
      total += item[0].total;
      total += item[1].total;
    });

    totalTemp = [
      [
        {
          image:
            'https://www.clipartmax.com/png/middle/291-2918987_complaint-comments-complaint-icon.png',
          total,
          title: 'Seluruh Aduan',
          color: '#808080'
        }
      ],
      ...totalTemp
    ];

    setTotalAduanByStatuses(totalTemp);
  }, []);

  return (
    <div className="dashboard-wrapper">
      <FilterDashboard />
      <div className="total-card-wrapper">
        {/* Total Aduan */}
        <div className="total-card">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </div>
          <div className="total">5000</div>
          <div className="title">Total Aduan</div>
        </div>
        {/* Total Saran */}
        <div className="total-card">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </div>
          <div className="total">2000</div>
          <div className="title">Total Saran/Masukkan</div>
        </div>
        {/* Total Kritik */}
        <div className="total-card">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </div>
          <div className="total">3000</div>
          <div className="title">Total Komplain/Pengaduan</div>
        </div>
        {/* Total Lembaga */}
        <div className="total-card">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </div>
          <div className="total">100</div>
          <div className="title">Total Lembaga</div>
        </div>
      </div>
      <br /> <br />
      <div className="aduan-perlembaga-wrapper">
        <Accordion>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Aduan Per-Lembaga</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="lembaga-list-buttons">
              <button className="">Semua Lembaga</button>
              <button className="">Lembaga 1</button>
              <button className="">Lembaga 2</button>
              <button className="">Lembaga 3</button>
              <button className="">Lembaga 4</button>
            </div>
            <Typography>
              {totalAduanByStatuses &&
                totalAduanByStatuses.map((item, index) => (
                  <div key={index} className="card-row">
                    {item.map((item2, index2) => (
                      <div
                        key={index2}
                        className="card-wrapper"
                        style={{
                          backgroundColor: item2.color
                        }}
                      >
                        <div className="icon">
                          <div
                            className="image"
                            style={{
                              backgroundImage: `url(${item2.image})`
                            }}
                          />
                        </div>
                        <div className="text">
                          <div className="title">{item2.title}</div>
                          <div className="total">{item2.total}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Dashboard;
