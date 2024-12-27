import { useParams } from 'react-router-dom';
import { Heading, VStack } from '@chakra-ui/react';
import VideoPlayer from '@/components/VideoPlayer';

export default function LessonPage() {
  const params = useParams();

  console.log(params);

  const url = 'https://us-central1-dopamine-lite-b61bf.cloudfunctions.net/getPresignedUrl?manifest_key=index.m3u8&segment_keys=index0.ts,index1.ts&folder=kana&expiration=3600'


  return (
    <VStack>
      <Heading>{params.title}</Heading>
      <VideoPlayer url= {url} watermark='Dopamine lite' ></VideoPlayer>

    </VStack>
  );
}