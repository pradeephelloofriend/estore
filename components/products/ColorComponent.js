import React from 'react'
import { Radio } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
const ColorComponent = ({colors}) => {
    console.log('colors',colors)
    //for color
    const [color,setColor]=React.useState(colors[0]._id)
    const onChangeColor = ({ target: { value } }) => {
        //console.log('radio3 checked', value);
        setColor(value);
      };
  return (
      <>
          <div className='radio-color-block'>
              <Radio.Group defaultValue={color} onChange={onChangeColor} buttonStyle="solid">
                {colors.map((c,idx)=>
                <Radio.Button key={idx}  style={{backgroundColor:c.colorCode}} value={c._id}><CheckOutlined className="uil uil-check" /></Radio.Button>
                )}
                  
              </Radio.Group>
          </div>
      </>
  )
}

export default ColorComponent