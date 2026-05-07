import styles from './styles.module.css';

type ContainerProps =
{
    children: React.ReactNode;
};

export function Container( { children }: ContainerProps )
{
    return (
      <div className={ styles.container_div }>
        <div className={ styles.content_div }>{ children }</div>
      </div>
    ); 
}