import { AdvertiseReuse } from "./AdvertiseReuse"

export function AdvertismentChangelog({getAdvertismentData}) {
    

    return (
        <>
            <AdvertiseReuse
                shape='rectangle'
                image={getAdvertismentData[0]?.image?.url}
                type={getAdvertismentData[0]?.adType}
                title={getAdvertismentData[0]?.title}
                id={getAdvertismentData[0]?._id}
                adURL={getAdvertismentData[0]?.adURL}

            />

        </>
    )
}