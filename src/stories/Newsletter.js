import React from 'react';
import PropTypes from 'prop-types';
import './Newsletter.css';

/**
- Use a Newsletter block to create a simple subscribe connection.
**/
export const Newsletter = ( props) => {
    const {
        icon,
        title,
        subtitle,
        segment,
        placeholder,
        label,
        loading,
        confirmation,
        className,
    } = props;

    return (
        <div className={`newsletter-signup ${className}`}>
            <div className="newsletter-signup__header">
                <div className="newsletter-signup__icon">
                    {icon}
                </div>
                <h3 className="newsletter-signup__title">{title}</h3>
                <p className="newsletter-signup__subtitle">{subtitle}</p>
            </div>
            <form className="newsletter-signup__form js-newsletter-form" method="post" action="newsletter_subscribe" noValidate>
                <input type="hidden" name="pardot_segment_id" value={segment}/>
                <input type="email" name="email" placeholder={placeholder} className="newsletter-signup__input" required/>
                <button className="newsletter-signup__button button button--brand" type="submit">
                    <span className="newsletter-signup__button-label-default">{label}</span>
                    <span className="newsletter-signup__button-label-fetching">{loading}</span>
                </button>
                <div className="newsletter-signup__confirmation">
                    <span className="newsletter-signup__form-message-success">
                        {confirmation}
                    </span>
                    <span className="js-error"></span>
                </div>
            </form>
        </div>
    );
};

Newsletter.propTypes = {
    /**
     Class modifiers
     */
    className: PropTypes.string,
    /**
     The icon
     */
    icon: PropTypes.string,
    /**
     The title
     */   
    title: PropTypes.string,
    /**
     The subtitle
     */   
    subtitle: PropTypes.string,
    /**
     The segment ID
     */   
    segment: PropTypes.string,
    /**
     The input placeholder
     */   
    placeholder: PropTypes.string,
    /**
     The button label
     */   
    label: PropTypes.string,
    /**
     The label when fetching data
     */   
    loading: PropTypes.string,
    /**
     The confirmation message
     */   
    confirmation: PropTypes.string,
}