import "../styles/components.scss";
import Swal from 'sweetalert2'
const ContectComponents = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8dfa6937-287a-483b-a0f2-32ec3fe9abe0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Messege sent successfully!",
                icon: "success"
              });
        }
      };
    
    return (
        <>
        <center><h1 className="contact-title">Get In Touch_</h1></center>
            <div className="contact-section">
                <section className="connect">
                    <form onSubmit={onSubmit}> 
                        <div className="input-box">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="field"
                                placeholder="Enter Your Name"
                                name = "name"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>E-mail Address</label>
                            <input
                                type="e-mail"
                                className="field"
                                placeholder="Enter Your e-mail"
                                name="e-mail"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>Message</label>
                            <textarea
                                name="message"
                                type="text"
                                className="field mess"
                                placeholder="Enter Your Massege"
                                required
                            />
                        </div>
                        <button className="submit" >Send</button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default ContectComponents;
