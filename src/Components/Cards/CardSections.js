import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';


const container = {
  display: 'flex',
  justifyContent: 'center',  
  margin: '10vh 0',  
};

const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#45B34A',
}

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #45B34A',
      boxSizing: 'border-box',
      borderRadius: '10px',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#45B34A',
    }
  }
};

const cards = [
  {
    title: 'Saldo da Conta',
    amount: 'R$ 21.837,00',
    icon: 'Money',
    percentage: '2.3',
  },
  {
    title: 'Limite Cartão',
    amount: 'R$ 10.927,00',
    icon: 'PaymentCard',
    percentage: '0.3'
  },
  {
    title: 'Rentabilidade',
    amount: 'R$ 15.093,00',
    icon: 'Savings',
    percentage: '1.3'
  }
]

const CardsSection = () => {
  initializeIcons();
  return (
    <div style={container}>
      {cards.map((card) => (
        <div className="s-Grid-col ms-sm3 ms-xl3">
          <Card styles={styles.cardStyles}>
                <Card.Section>
                    <Card.Item>
                        <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                        <Text styles={styles.header}>{card.title}</Text>
                    </Card.Item>
                    <Card.Item>
                        <Text styles={styles.amount}>{card.amount}</Text>
                    </Card.Item>
                    <Card.Item>
                        <Text styles={styles.percentage}>
                        {card.percentage} %
                        </Text>
                    </Card.Item>
                </Card.Section>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;