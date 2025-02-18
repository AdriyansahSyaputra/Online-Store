import React from "react";

const Map = () => {
    return (
        <div className="w-full overflow-hidden h-64 md:h-96 mt-10 md:mt-28">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25186.73056651698!2d106.83412305085533!3d-6.176078951020059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1737290686053!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="noReferrerWhenDowngrade"
                className="w-full h-full"
            ></iframe>
        </div>
    );
}

export default Map;