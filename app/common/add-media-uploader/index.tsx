import React, {useState} from "react";
import {Image, TouchableOpacity, View} from "react-native";

import {
  ImagePickerResponse,
  launchImageLibrary,
  MediaType,
  Asset,
} from "react-native-image-picker";
import AddMedia from "@/assets/svg/add-media-image.svg";
interface ImageProps {
  onImageSelected: (image: string) => void;
}

const ImagePickerComponent: React.FC<ImageProps> = ({
  onImageSelected,
}: ImageProps) => {
  const [selectedImage, setSelectedImage] = useState<Asset[]>([]);

  const handleImagePicker = async () => {
    const options = {
      mediaType: "photo" as MediaType,
      cropping: true,
      cropperCircleOverlay: true,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else {
        if (response.assets) {
          setSelectedImage(response.assets);
          onImageSelected(response.assets?.[0]?.uri ?? "");
        }
      }
    });
  };

  return (
    <TouchableOpacity
      onPress={handleImagePicker}
      className={`rounded-[999px] w-[100px] h-[100px] self-center border-dotted border border-primary-purple mb-30 ${
        selectedImage.length > 0 && "w-fit h-fit"
      }`}>
      <View>
        {selectedImage.length > 0 ? (
          <Image
            className="w-full h-full rounded-sm rounded-[999px]"
            source={{uri: selectedImage[0].uri}}
            resizeMode="cover"
          />
        ) : (
          <View>
            <AddMedia
              color={"#491a74"}
              width={40}
              height={40}
              className="self-center my-30"
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ImagePickerComponent;
