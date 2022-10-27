import { AdvertiseReuse } from "./AdvertiseReuse"

export function AdevertiseTokenTwo({getAdvertismentData}) {

    return (
        <>
            <AdvertiseReuse
                shape='rectangle590_72'
                image={getAdvertismentData[1]?.image?.url}
                type={getAdvertismentData[1]?.adType}
                title={getAdvertismentData[1]?.title}
                id={getAdvertismentData[1]?._id}
                adURL={getAdvertismentData[1]?.adURL}

            />

        </>
    )
}