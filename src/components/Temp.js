import React, { useState, useEffect } from 'react'

function Temp() {

    const tt = new Date();
    function getLastDay(today) {

        console.log(today);
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        return lastWeek;
    }

    const t = getLastDay(tt);

    var todayys = new Date();
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(todayys);
 
   

    function getLastWeek(today) {

        console.log(today);
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return lastWeek;
    }
    function getNextWeek(today) {

        console.log(today);
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        return lastWeek;
    }

    function CurrenWeekDisplay(temp) {

        const firstDay = new Date(temp.setDate(temp.getDate() - temp.getDay()));
        const lastDay = new Date(temp.setDate(temp.getDate() - temp.getDay() + 6));

        var arr = [];
        for (let i = lastDay.getDay(); i >= firstDay.getDay(); i--) {

            var prevday = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() - i);

            arr.push(prevday);
        }

        return arr;
    }

    const [currWeek, setCurrWeek] = useState([]);

   

    function Load() {
        setCurrWeek(CurrenWeekDisplay(todayys));
    }

    useEffect(() => {
        Load();
    }, []
    )



    function Previous() {

        setCurrWeek(CurrenWeekDisplay(getLastWeek(todayys)));

    };

    function Current() {

        setCurrWeek(CurrenWeekDisplay((todayys)));

    };
    


    function Next() {
        console.log(todayys);
        var q = getNextWeek(todayys);
        setCurrWeek(CurrenWeekDisplay(q));

    };
   


    return (
    <>
        <div className='p-3 flex justify-between'>
            <div className="">

                <input type="button" onClick={() => { Previous() }} className=" p-2 bg-red-700 text-white border-[1px] rounded-lg" id="Aditya" value="Previous Week" />
            </div>

            <div className="">

                <input type="button" onClick={() => { Current() }} className="p-2 bg-green-600 text-white rounded-lg" id="Aditya" value={`${todayys.getDate()}/${todayys.getMonth() + 1}/${todayys.getFullYear()} ${days[tt.getDay()]}`}></input>
            </div>
            <div className="">

                <input type="button" onClick={() => { Next() }} className="p-2 bg-blue-600 text-white rounded-lg" id="Aditya" value="Next Week" />
            </div>

        </div>
        <div className="pr-100">

            <label for="cars" className=' p-2 bg-gray-700 text-white  rounded-lg'>Choose a car:</label>

            <select name='time' className=' p-2 bg-gray-100 text-black border-[1px] rounded-lg '>

                <option value="saab">India Standard Time</option>
                <option value="volvo">[UTC-5] eastern standard time</option>

            </select>          
              </div>
        <br />
        <b>Week</b>
        {/* <div>{firstDay.getDate()} + {firstDay.getDay()} + {firstDay.getFullYear()} + {days[firstDay.getDay()]}</div> */}

        <div>
            {currWeek.map((sub, so) => {

                return sub > t ?
                    <>

                        <br />
                        <div className="App">
                            <b className='text-xl text-red-400'>{sub.getDate() + " " + days[sub.getDay()] + " " + sub.getFullYear()}
                            </b>
                            <div className="topping flex gap-3">
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                8:00AM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                8:30AM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                9:00Am
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                9:30AM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                10:AM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                10:30AM<input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                11:00AM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                11:30AM<input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                12:00AM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                12:30PM
                            </div>
                            <div className="topping flex gap-3">
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                1:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                1:30PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                2:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                2:30PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                3:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                3:30PM<input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                4:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                4:30PM<input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                5:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                5:30PM
                            </div>
                            <div className="topping flex gap-3">
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                6:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                6:30PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                7:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                7:30PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                8:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                8:30PM<input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                9:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                9:30PM<input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                10:00PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                10:30PM
                                <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    value="Paneer"
                                //   checked={isChecked}
                                //   onChange={handleOnChange}
                                />
                                11:00PM
                            </div>

                        </div>


                    </>
                    :
                    <>

                        <div className='flex gap-2 mt-3'>
                            <b className='text-xl text-red-400'>{sub.getDate() + " " + days[sub.getDay()] + " " + sub.getFullYear()}
                            </b>
                            <p className='font-bold text-blue-600'>Past</p>
                        </div>


                    </>

            })}
        </div>

        <br />




    </>
    )
};

export default Temp