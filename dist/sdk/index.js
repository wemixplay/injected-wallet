import wemixSdk from './wemix.js';
export default wemixSdk;
if (typeof window !== 'undefined') {
    window.Wemix3SDK = wemixSdk;
}
