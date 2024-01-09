import './HelpItem.scss';

type Props = {
  title: string,
  image: string,
  alt:string,
  discription:string
}

const HelpItem = ({ title, image, alt, discription }: Props) => {
  return (
    <li className="help__item">
      <h2 className="help__title">{title}</h2>
      <img src={image} alt={alt} />
      <p className="help__discription">{discription}</p>
    </li>
  )
};
  
export default HelpItem;