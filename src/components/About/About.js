import './about.css'
import { useTranslation } from 'react-i18next';

const About = () => {
    const [t] = useTranslation('global');

    return (
        <div id='about-section' className='main about-section'>
            <div className='about-container'>
                <h3 className='h-title3'>
                    {t('about.h3')}
                </h3>
                <div className='img-container'>
                    <img className='about-img' src={require('../../assets/img/DSC_8981-2.webp')} alt='portrait' />
                    {/* <p className='about-text'>
                        {t('about.about-text')}
                    </p> */}
                    <p className='about-text'>
                        <span>{t('header.h1')}</span>{t('about.about-text')}</p>
                    <p className='about-text'>
                        {t('about.about-text1')}
                    </p>
                    <p className='about-text'>
                        {t('about.about-text2')}
                    </p>
                    <p className='about-text'>
                        {t('about.about-text3')}
                    </p>

                </div>
            </div>
        </div>

    )
}

export default About;