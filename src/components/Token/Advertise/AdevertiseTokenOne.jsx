import { AdvertiseReuse } from "./AdvertiseReuse"

export function AdevertiseTokenOne({getAdvertismentData}) {

    return (
        <>
            <AdvertiseReuse
                shape='square'
                image={getAdvertismentData[0]?.image?.url}
                type={getAdvertismentData[0]?.adType}
                title={getAdvertismentData[0]?.title}
                id={getAdvertismentData[0]?._id}
                adURL={getAdvertismentData[0]?.adURL}

            />

        </>
    )
}