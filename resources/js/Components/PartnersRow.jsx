import { Group, Image, SimpleGrid } from "@mantine/core";
import EVIDEN from '../../images/partners/EVIDEN.svg'
import INTEL from '../../images/partners/INTEL.svg'
import NVIDIA from '../../images/partners/NVIDIA.svg'
import NETAPP from '../../images/partners/NETAPP.svg'
import CISCO from '../../images/partners/CISCO.svg'

export default function PartnersRow() {
    return (
        <SimpleGrid 
            className="h-[450px] sm:h-[250px] md:h-[120px]"
            my={'lg'}
            cols={5}
            spacing="lg"
            breakpoints={[
            { maxWidth: '50rem', cols: 3, spacing: 'md' },
            { maxWidth: '40rem', cols: 2, spacing: 'sm' },
            ]}>
            <Image className="max-h-7 md:mah-12" mah={8} src={EVIDEN} />
            <Image className="max-h-7 md:mah-12" mah={8} src={INTEL} />
            <Image className="max-h-7 md:mah-12" mah={8} src={NVIDIA} />
            <Image className="max-h-7 md:mah-12" mah={8} src={NETAPP} />
            <Image className="max-h-7 md:mah-12" mah={8} src={CISCO} />
        </SimpleGrid>
    )
}