import { useRef, useState } from "react"
import {
  View,
  Image,
  ViewStyle,
  TouchableOpacity,
  Dimensions,
  TextStyle,
  ImageStyle,
} from "react-native"
import Share from "react-native-share"
import ViewShot, { captureRef } from "react-native-view-shot"
import { Icon, Text } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view"

interface ImageViewerProps {
  imageUrl?: string
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  imageUrl = "https://fastly.picsum.photos/id/7/900/500.jpg?hmac=kM7vXpKtuBLAhPCqR7_AekWnYGM4crRUODPd16oCxog",
}) => {
  const [error, setError] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)
  const {
    themed,
    theme: { colors },
  } = useAppTheme()
  const ref = useRef(null)

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360)
  }

  const handleShare = async () => {
    try {
      const uri = await captureRef(ref, {
        format: "png",
        quality: 0.7,
      })
      await Share.open({ url: uri })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={themed($container)}>
      <View style={themed($header)}>
        <TouchableOpacity onPress={handleRotate} style={themed($rotateButton)}>
          <Icon icon="loading" size={24} color={colors.palette.neutral900} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={themed($rotateButton)}>
          <Icon icon="share" size={24} color={colors.palette.neutral900} />
        </TouchableOpacity>
      </View>

      <View style={themed($imageContainer)}>
        <ReactNativeZoomableView
          maxZoom={3}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          style={themed($zoomViewContainer)}
        >
          <ViewShot ref={ref}>
            {imageUrl && (
              <Image
                source={{ uri: imageUrl }}
                style={[
                  themed($image),
                  {
                    width:
                      rotation === 90 || rotation === 270
                        ? Dimensions.get("window").height
                        : Dimensions.get("window").width,
                    height:
                      rotation === 90 || rotation === 270
                        ? Dimensions.get("window").width
                        : Dimensions.get("window").height,
                    transform: [{ rotate: `${rotation}deg` }],
                  },
                ]}
                resizeMode="contain"
                onError={() => {
                  setError("Failed to load image")
                }}
              />
            )}
          </ViewShot>
          {error && <Text style={themed($errorText)}>{error}</Text>}
        </ReactNativeZoomableView>
      </View>
    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  width: "100%",
  height: "100%",
})

const $header: ThemedStyle<ViewStyle> = () => ({
  flexDirection: "row",
  justifyContent: "flex-end",
  padding: 16,
  gap: 8,
})

const $rotateButton: ThemedStyle<ViewStyle> = () => ({
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
})

const $imageContainer: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  width: "100%",
  backgroundColor: "#F5F5F5",
  alignItems: "center",
  justifyContent: "center",
})

const $zoomViewContainer: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
})

const $image: ThemedStyle<ImageStyle> = () => ({
  resizeMode: "contain",
})

const $errorText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.alert,
  marginTop: 8,
  textAlign: "center",
})
