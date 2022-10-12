import { AdvertiseReuse } from "./AdvertiseReuse"

export function AdvertismentTokens({getAdvertismentData}) {

    return (
        <>
            <AdvertiseReuse
                shape='rectangle'
                image={getAdvertismentData?.image?.url}
                type={getAdvertismentData?.adType}
                title={getAdvertismentData?.title}
                id={getAdvertismentData?._id}
                adURL={getAdvertismentData?.adURL}

            />

        </>
    )
}