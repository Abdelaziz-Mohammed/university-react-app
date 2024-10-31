import "./Programs.css"
import first_program from '../../assets/program-1.png'
import second_program from '../../assets/program-2.png'
import third_program from '../../assets/program-3.png'
import first_program_icon from '../../assets/program-icon-1.png'
import second_program_icon from '../../assets/program-icon-2.png'
import third_program_icon from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <>
        <div className="programs">
            <div className="program">
                <img src={first_program} alt="..." />
                <div className="caption">
                    <img src={first_program_icon} alt="..." />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={second_program} alt="..." />
                <div className="caption">
                    <img src={second_program_icon} alt="..." />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={third_program} alt="..." />
                <div className="caption">
                    <img src={third_program_icon} alt="..." />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Programs