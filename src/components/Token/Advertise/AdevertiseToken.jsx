import { AdvertiseReuse } from "./AdvertiseReuse"

export function AdevertiseToken({getAdvertismentData}) {
    let stylingdata = {
        height: '285px',
        width: '200px'
    }

    return (
        <>
            <AdvertiseReuse
                styling={stylingdata}
                image={getAdvertismentData?.image?.url}
                type={getAdvertismentData?.adType}
                title={getAdvertismentData?.title}
                id={getAdvertismentData?._id}
                adURL={getAdvertismentData?.adURL}

            />

        </>
    )
}