import React from 'react'
import './variables.scss'

export default function Variables() {
    return (
        <div className='variables'>
            <div className="variables__whatIsVariable">

                <h2 className='header'>What is a Variable</h2>

                <p>
                    In computer programming, a variable or scalar is an abstract
                    storage location paired with an associated symbolic name,
                    which contains some known or unknown quantity of information
                    referred to as a value; or in simpler terms, a variable is
                    a container for a particular set of bits or type of data
                    (like integer, float, String etc...).
                    <br />
                    A variable can eventually be associated with or
                    identified by a memory address. The variable name is the
                    usual way to reference the stored value, in addition to
                    referring to the variable itself, depending on the context.
                    This separation of name and content allows the name to be
                    used independently of the exact information it represents.
                    The identifier in computer source code can be bound to a
                    value during run time, and the value of the variable may t
                    hus change during the course of program execution
                </p>
            </div>
        </div>
    )
}
