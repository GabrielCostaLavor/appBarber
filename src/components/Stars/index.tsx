import Icon from 'react-native-vector-icons/FontAwesome';

interface Props{
    stars: number,
    size?: number
}

const Stars: React.FC<Props> = ({stars, size = 10}) => {
    const itemlist = []
    for (let i = 0; i < stars ; i++) {
        itemlist.push(i)
    }
    return itemlist.map(item => 
    <Icon
      key={item}
      name="star"
      size={size}
      color="#F5B400" 
    />)
}

export default Stars