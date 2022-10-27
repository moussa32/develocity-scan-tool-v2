import { AdvertiseReuse } from "./AdvertiseReuse"

export function AdevertiseTokenThree({getAdvertismentData}) {

    return (
        <>
            <AdvertiseReuse
                shape='square285_142'
                // shape='square284_254'
                image={getAdvertismentData[2]?.image?.url}
                type={getAdvertismentData[2]?.adType}
                title={getAdvertismentData[2]?.title}
                id={getAdvertismentData[2]?._id}
                adURL={getAdvertismentData[2]?.adURL}

            />

        </>
    )
}

