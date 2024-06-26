import './disc.css'
import { useTranslation } from 'react-i18next';
const Disc = () => {
    const [t] = useTranslation('global');

    return (
        <div id='disc' className='section'>
            <div className='disc-container'>
                <h3 className='h-title-disc'>
                    {t('disc.h3-tt')}
                </h3>
                <div className='cd-flex'>
                    <div className='cd-container'>
                        <img className='cd-img' src={require('../../assets/img/cd.webp')} alt='cd' />
                        <img className='cd-img' src={require('../../assets/img/cd2.webp')} alt='cd' />
                    </div>
                    <div className='text-c'>
                        {t('disc.cd-text')}
                        <div className='text-c2'>
                            <span className='altra-volta'>{t('disc.altra')}</span>
                            <span className='a1'>{t('disc.altra1')}</span>
                            <span className='a1'>{t('disc.altra2')}</span>
                            <span className='a1'>{t('disc.altra3')}</span>
                            <span className='a1'>{t('disc.altra4')}</span>
                        </div>
                    </div>

                </div>
                <h4 className='title-playlist'>{t('disc.playlist')}</h4>
                <div className='audio-section'>
                    <div className='audio-small-section'>
                        <h4 className='title-playlist2'>WOLFGANG AMADEUSZ  MOZART – CONCERTO KV 488</h4>

                        <p className='audio-text'>MOZART I</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/01_MOZART_A-dur_Koncert1.mp3')} type="audio/mpeg" />
                        </audio>

                        <p className='audio-text'>MOZART II</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/02_MOZART_A-dur_Koncert2.mp3')} type="audio/mpeg" />
                        </audio>

                        <p className='audio-text'>MOZART III</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/03_MOZART_A-dur_Koncert3.mp3')} type="audio/mpeg" />
                        </audio>
                    </div>
                    <hr className='line'></hr>
                    <div className='audio-small-section'>
                        <h4 className='title-playlist2'>FRYDERYK CHOPIN –  PIANO CONCERTO IN F MINOR, OP. 21</h4>
                        <p className='audio-text'>CHOPIN IV</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/04_CHOPIN_f-moll_Koncert1.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>CHOPIN V</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/05_CHOPIN_f-moll_Koncert2.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>CHOPIN VI</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/06_CHOPIN_f-moll_Koncert3.mp3')} type="audio/mpeg" />

                        </audio>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Disc;