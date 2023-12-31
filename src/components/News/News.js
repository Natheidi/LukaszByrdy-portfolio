import './news.css'
import { useTranslation } from 'react-i18next';

const News = () => {
    const [t] = useTranslation('global');

    return (
        <div id='news' className='section section-news'>
            <div className='news-container'>
                <h3 className='h-title-news'>
                    {t('news.h3-title')}
                </h3>
                <h4 className='info'>
                    {t('news.info')}
                </h4>
            
            </div>
        </div>

    )
}

export default News;