import React from 'react';

export default function Map() {
    return (
        <div className='container'>
            <div
                style={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    margin: '2rem 0',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                }}
            >
                <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.777630407547!2d76.88670737686977!3d43.23894907913639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ebef2c5fef7%3A0x9489795c4c3cc499!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2skz!4v1717340123456!5m2!1sen!2skz"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}