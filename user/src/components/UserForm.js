import React from 'react'
import styled from 'styled-components'

const UserInfo = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px black solid;
        border-radius: 5px;
        box-shadow: 2px 3px 3px gray;
        width: 80%;
        align-items: center;
        height: fit-content;
    
    .formContainer{
        /* display: flex;
        flex-direction: column; */
        /* align-items: flex-start; */
        border: 1px green solid;
        width: 100%;
    }
    .formInputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px blue solid;
        padding: 2%;
    }
    .btns{
        border: 1px red solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        
    }
    
    label{
        line-height: 26px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    input{
        height: 20px;
        width: 23rem;
        margin: 1%;
    }
    select{
        height: 30px;
        width: 23.5rem;
    }
    h4{
        text-align: left;
    }
    button{
        padding: 1%;
        margin: 3%;
        font-size: 1.5rem;
    }
    
`

const UserForm = (props) => {
    const {values, change, submit, disabled, errors } = props;

    
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === "checkbox" ? checked : value;
        change(name, newValue);
    };
    

    return (
        <UserInfo>
            <form className="formContainer" onSubmit={onSubmit}>
                
                <div className="formTitle">
                    <h2>Add A User</h2>

                </div>

                <div className="formInputs">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={onChange}
                            value={values.name}
                            placeholder="Enter Name"
                            
                        />
                        {errors.name.length > 0 ? ( <p className='error' > {errors.name} </p> ) : null }
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={values.email}
                            placeholder="Enter Email"
                        />
                        {errors.email.length > 0 ? ( <p className='error' > {errors.email} </p> ) : null }
                    </label>

                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            onChange={onChange}
                            value={values.password}
                            placeholder="Create Password"
                        />
                        {errors.password.length > 0 ? ( <p className='error' > {errors.password} </p> ) : null }
                    </label>

                        {/* dropdown menu */}
                    <label>
                        Role:
                        <select
                            name="role"
                            onChange={onChange}
                            value={values.role}>
                            <option
                            value="">--Select Role--</option>
                            <option
                            value="Backend Developer">Backend Developer</option>
                            <option
                            value="Frontend Developer">Frontend Developer</option>
                            <option
                            value="Designer">Designer</option>
                            <option
                            value="Project Manager">Project Manager</option>
                        </select>
                        {errors.role.length > 0 ? ( <p className='error' > {errors.role} </p> ) : null }
                    </label>
                </div>
                <div className="btns">
                    {/* radio button */}
                    <div className="radioBtns">
                        <h4>Status:</h4>

                        <label>
                            
                            <input
                                type="radio"
                                name="status"
                                value="Full-time"
                                checked={values.status === "Full-time"}
                                onChange={onChange}
                            />
                            {errors.status.length > 0 ? ( <p className='error' > {errors.status} </p> ) : null }
                            Full-time
                        </label>
                    </div>

                    <div className="radioBtns">
                        <label>
                            
                            <input
                                type="radio"
                                name="status"
                                value="Part-time"
                                checked={values.status === "Part-time"}
                                onChange={onChange}
                            />
                            {errors.status.length > 0 ? ( <p className='error' > {errors.status} </p> ) : null }
                            Part-time
                        </label>
                    </div>

                    <div className="radioBtns">
                        <label>
                            
                            <input
                                type="radio"
                                name="status"
                                value="Contractor"
                                checked={values.status === "Contractor"}
                                onChange={onChange}
                            />
                            {errors.status.length > 0 ? ( <p className='error' > {errors.status} </p> ) : null }
                            Contractor
                        </label>
                    </div>

                    {/* checkbox */}
                    <div className="termsCheckbox">
                        <h4>Do you accept the Terms of Service?</h4>
                    
                        <label>
                            Accept
                            <input 
                                type="checkbox"
                                name="terms"
                                checked={values.terms}
                                onChange={onChange}
                                />
                                {errors.terms.length > 0 ? ( <p className='error' > {errors.terms} </p> ) : null }
                        </label>
                    </div>
                </div>
                
                <button disabled={disabled}>submit</button>
            </form>
        </UserInfo>
    )
}

export default UserForm
