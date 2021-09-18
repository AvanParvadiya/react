import classes from './Input.module.css';
const Input=props=>{
    //<input  {...props.input} /> this will put type="text" if there is {type:'text'} in input
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input  {...props.input} />
    </div>
}
export default Input;
