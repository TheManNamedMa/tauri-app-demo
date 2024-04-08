
export type DiskInfo = {
	file_system: string;
	mount_point: string;
	total_space: number;
	used_space: number;
	available_space: number;
};

type CpuUsage = number;

export type CPUInfo = {
	name: string;
	cpu_usage: CpuUsage;
	vendor_id: string;
	brand: String;
	frequency: number;
};




export interface SystemInfo {
	system_name: String;
	kernel_version: String;
	os_version: String;
	host_name: String;

	cpu_cores: number;
	cpus: CPUInfo[];
	cpu_usage: number;

	disks: [DiskInfo];

	used_memory: number;
	free_memory: number;
	total_memory: number;
}

export type PropsSystemInfo = {
	systemInfo: SystemInfo | undefined;
	loading: boolean;
};

export type CpuCoresNames = string[]

type XAxisTime = number | string
type CpuRecord = {
	time: XAxisTime;
	cpu_usage: CpuUsage;
};

export type CpuRecords = Array<CpuRecord>;
export type CpuCoreRecords = Map<string, CpuRecords>

export interface CpuUsageRecorderBase {
	time: XAxisTime;
}

export interface CpuUsageRecorder extends CpuUsageRecorderBase {
	[key: string]: any;
}

export type CpuCoreUsageRecorders = CpuUsageRecorder[]


export interface SystemInfo extends PropsSystemInfo {
	initializing: boolean;
	cpuCores: CpuCoreRecords,
	cpuUsage: CpuCoreUsageRecorders,
	cpuCoresNames: CpuCoresNames
};


export type PropsCPUDetailInfo = Pick<SystemInfo, 'initializing' | 'cpuCores' | 'cpuUsage' | 'cpuCoresNames'>