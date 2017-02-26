import { call, put, takeLatest } from 'redux-saga/effects';
import { CONSUME_YOUTUBE_VIDEO } from '../constants/video-popup';
import { startLoading, stopLoading } from '../actions/loaders';
import { setPopupVideo } from '../actions/video-popup';
import { getYoutubeVideoId, getYoutubeEmbedVideoUrl } from '../utils/video';

function* consumeYoutubeVideo({ payload }) {
    try {
        yield put(startLoading({ name: 'video-popup' }));
        const { videoUrl } = payload;
        const videoId = getYoutubeVideoId(videoUrl);
        const videoData = {
            id: videoId,
            url: videoUrl,
            embedUrl: getYoutubeEmbedVideoUrl(videoUrl)
        };

        yield put(setPopupVideo({ videoData }));
    } catch(e) {
        console.log(e)
    } finally {
        yield put(stopLoading({ name: 'video-popup' }));
    }
}

export function* watchConsumeYoutubeVideo() {
    yield takeLatest(CONSUME_YOUTUBE_VIDEO, consumeYoutubeVideo);
}

export function* videoPopupSaga() {
    yield [
        call(watchConsumeYoutubeVideo),
    ];
}