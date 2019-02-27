import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5926490450806!2d-74.03890638459458!3d40.72698307933018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25753b7dbad2f%3A0x447ac6420641467!2sNewport+Centre!5e0!3m2!1sen!2sus!4v1551244675316" width="100%" height="500px" frameBorder="0"  allowFullScreen></iframe>

            <div className='location_tag'>
                <div>
                    LOCATION
                </div>

            </div>
                        
        </div>
    );
}

export default Location;
